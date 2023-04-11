import Image from 'next/image';
import InterviewImage from '../../../public/Image/interview.png';
import techImage from '../../../public/Image/tech.png';
import Block from '../atmos/Block';

export default function MainBlock() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-40">
        <Block title={'기술 영상 추천'}>
          <a href="https://www.youtube.com/watch?v=4_WLS9Lj6n4" target="_blank">
            <Image src={techImage} alt="youtube" width={300} height={180} />
          </a>
        </Block>
        <Block title={'면접 자료 추천'}>
          <ul className="font-medium space-y-6 overflow-hidden">
            <li>
              <a href="https://youtu.be/YuqB8D6eCKE" target="_blank">
                CSR&SSR 과 Universal Rendering
              </a>
            </li>
            <li>
              <a href="https://whales.tistory.com/120" target="_blank">
                Get과 Post의 차이를 아시나요?
              </a>
            </li>
            <li>
              <a
                href="https://jongminfire.dev/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80"
                target="_blank"
              >
                객체지향 프로그래밍이란?
              </a>
            </li>
            <li>
              <a
                href="https://velog.io/@pilyeooong/Promise%EC%99%80-asyncawait-%EC%B0%A8%EC%9D%B4%EC%A0%90"
                target="_blank"
              >
                Promise와 async/await 차이점
              </a>
            </li>
            <li>
              <a
                href="https://velog.io/@wns450/%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91-%EC%A4%80%EB%B9%84%ED%95%98%EA%B8%B0-Deep-DIVE"
                target="_blank"
              >
                기술면접 준비하기 & Deep DIVE
              </a>
            </li>
          </ul>
        </Block>
        <Block title={'면접 영상 추천'}>
          <a
            href="https://www.youtube.com/watch?v=yA4d5ZydVVQ&t=230s"
            target="_blank"
          >
            <Image
              src={InterviewImage}
              alt="youtube"
              width={300}
              height={180}
              className="max-w-full h-auto"
            />
          </a>
        </Block>
      </div>
    </div>
  );
}
