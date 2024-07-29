import { Header } from '../../components/Header';
import * as S from './styles';

export function Splash() {
  return (
    <S.SplashLayout>
      <Header isLogin={false} />
    </S.SplashLayout>
  );
}
