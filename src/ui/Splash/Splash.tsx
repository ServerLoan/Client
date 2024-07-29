import { useEffect, useRef } from 'react';
import { Header } from '../../components/Header';
import * as S from './styles';
import MinecraftSrc from '../../assets/image/minecraft.png';
import PalworldSrc from '../../assets/image/palworld.png';

export function Splash() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
    };

    const pageRefCurrent = pageRef.current;

    if (pageRefCurrent) {
      pageRefCurrent.addEventListener('wheel', wheelHandler);
    }

    return () => {
      if (pageRefCurrent) {
        pageRefCurrent.removeEventListener('wheel', wheelHandler);
      }
    };
  }, []);

  return (
    <S.SplashLayout ref={pageRef}>
      <S.Page>
        <Header isLogin={false} />
        <S.Paragraph>게임 서버를 쉽게 열어보세요</S.Paragraph>
      </S.Page>
      <S.Page>
        <S.Image src={MinecraftSrc} />
      </S.Page>
      <S.Page>
        <S.Image src={PalworldSrc} />
      </S.Page>
    </S.SplashLayout>
  );
}
