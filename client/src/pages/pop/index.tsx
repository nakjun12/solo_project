import { useRef, useState, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  async function startRecording() {
    if (isRecording) {
      //이미 시작중일때 작동함
      console.log("Already recording.");
      return;
    }

    const constraints = { audio: true, video: true };

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      ); //비디오 값을 가져옴
      const videoElem = videoRef.current;

      if (videoElem) {
        videoElem.srcObject = mediaStream;
        videoElem.play();
        mediaRecorderRef.current = new MediaRecorder(mediaStream, {
          mimeType: "video/webm",
        }); //녹화 세팅
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        ); // Blob 상태로 저장
        mediaRecorderRef.current.start(); //녹화 시작
        setIsRecording(true);
      }
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  }

  function handleDataAvailable(event: BlobEvent) {
    if (event.data.size > 0) {
      recordedChunksRef.current.push(event.data);
    }
  } // 데이터 저장하는 함수

  function stopRecording() {
    const mediaRecorder = mediaRecorderRef.current;

    if (!mediaRecorder) return;

    mediaRecorder.stop(); //저장을 멈춤
    mediaRecorder.removeEventListener("dataavailable", handleDataAvailable); //저장하는 이벤트 삭제
    setIsRecording(false);

    const blob = new Blob(recordedChunksRef.current, { type: "video/webm" }); //저장해온 것을 담음
    const url = URL.createObjectURL(blob); //url에 담음
    const fileName = `recorded-video-${new Date().toISOString()}.webm`; //네이밍

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    recordedChunksRef.current = [];
  }
  return (
    <>
      <main className="relative ">
        <div>
          <span className="focus-div">안녕</span>
          <video ref={videoRef} autoPlay={true} />
          <button onClick={startRecording} disabled={isRecording}>
            {isRecording ? "Recording..." : "Start"}
          </button>
          {isRecording && (
            <button
              onClick={() => {
                videoRef.current?.pause();
              }}
            >
              Pause Video
            </button>
          )}
          <button onClick={stopRecording}>Stop recording and download</button>
          <h1 className="">Hello world!</h1>
        </div>
      </main>
    </>
  );
}

//헤드 설정 잊지말것
