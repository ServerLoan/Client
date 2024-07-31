import { Header } from '../../components/Header';
import * as S from './styles';
import MinecraftSrc from '../../assets/image/minecraft.png';
import PalworldSrc from '../../assets/image/palworld.png';

export function Splash() {
  return (
    <S.SplashLayout>
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
