import ReadString from '@/components/molecules/ReadString';

import { useRef, useState } from 'react';
import { BsPlayCircleFill, BsStopCircleFill } from 'react-icons/bs';
import { ImFloppyDisk } from 'react-icons/im';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  async function startRecording() {
    if (isRecording) {
      //이미 시작중일때 작동함
      console.log('Already recording.');
      return;
    }

    const constraints = { audio: true, video: true };

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints,
      ); //비디오 값을 가져옴
      const videoElem = videoRef.current;

      if (videoElem) {
        videoElem.srcObject = mediaStream;
        videoElem.play();
        mediaRecorderRef.current = new MediaRecorder(mediaStream, {
          mimeType: 'video/webm',
        }); //녹화 세팅
        mediaRecorderRef.current.addEventListener(
          'dataavailable',
          handleDataAvailable,
        ); // Blob 상태로 저장
        mediaRecorderRef.current.start(); //녹화 시작
        setIsRecording(true);
      }
    } catch (error) {
      console.error('Error accessing media devices.', error);
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
    mediaRecorder.removeEventListener('dataavailable', handleDataAvailable); //저장하는 이벤트 삭제
    setIsRecording(false);

    const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' }); //저장해온 것을 담음
    const url = URL.createObjectURL(blob); //url에 담음
    const fileName = `recorded-video-${new Date().toISOString()}.webm`; //네이밍

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    recordedChunksRef.current = [];
    videoRef.current?.pause();
  }
  const stopVideo = () => {
    if (isRecording && videoRef.current) {
      videoRef.current.pause();
      setIsRecording(false);
    }
  };

  return (
    <>
      <main className="relative ">
        <div className="flex flex-col items-center h-full">
          <video
            ref={videoRef}
            autoPlay={true}
            className="
          h-[400px] w-[441px] object-cover border-2"
          />
          <section className="mt-10 w-full flex justify-around">
            <div>
              <div className="flex flex-row justify-center my-6">
                {isRecording ? (
                  <button
                    onClick={() => {
                      stopVideo();
                    }}
                  >
                    <BsStopCircleFill size={30} />
                  </button>
                ) : (
                  <button onClick={startRecording}>
                    <BsPlayCircleFill size={30} />
                  </button>
                )}
                <button className="ml-8" onClick={() => stopRecording()}>
                  <ImFloppyDisk size={30} />
                </button>
              </div>

              <ReadString />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
//면접 컨셉
//헤드 설정 잊지말것
//읽어주는 것 문제 내기 정답 출력
//저장하는 것 대신에 출력하는것도 괜찮다.
//
