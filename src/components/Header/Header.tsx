import * as S from './styles';

export function Header({ isLogin }: { isLogin: boolean }) {
  return (
    <S.HeaderLayout>
      <S.Logo />
      <S.ButtonRow>
        {isLogin && <S.Button>로그아웃</S.Button>}
        {!isLogin && <S.Button>로그인</S.Button>}
        {!isLogin && <S.Button>회원가입</S.Button>}
      </S.ButtonRow>
    </S.HeaderLayout>
  );
}
