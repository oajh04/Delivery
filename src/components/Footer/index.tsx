import React from 'react';
import { AiFillGithub, AiFillApi } from 'react-icons/ai'
import { SiIconify } from 'react-icons/si'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
        <S.Wrapper>
            <S.Description>
                <a href="https://github.com/oajh04"><AiFillGithub /></a>
                <div>Developed</div>
            </S.Description>
            <S.Description>
                <a href="https://tracker.delivery/guide/"><AiFillApi /></a>
                <div>Api</div>
            </S.Description>
            <S.Description>
                <a href="https://stock.adobe.com/kr/images/simple-set-of-shipping-related-vector-line-icons-contains-such-icons-as-courier-package-protection-return-and-more-editable-stroke-48x48-pixel-perfect/208263514">
                    <SiIconify />
                </a>
                <div>Icons</div>
            </S.Description>
        </S.Wrapper>
        <div>이 페이지에는 데브시스터즈에서 제작한 ‘<a href="https://www.cookierunfont.com/">쿠키런 글꼴</a>’이 적용되어 있습니다.</div>
    </S.Footer>
  );
}

export default Footer;