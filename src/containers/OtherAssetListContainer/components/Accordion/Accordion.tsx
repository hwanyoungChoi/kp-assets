import { useState } from 'react';
import * as S from './Accordion.styled';
import IconChevronUp from '../../../../assets/icon_chevron_up.svg?react';

interface Props {
  isOpen?: boolean;
  headerContent: string | React.ReactNode;
  collpaseContent?: string | React.ReactNode;
}

export default function Accordion({
  isOpen = true,
  headerContent,
  collpaseContent,
  children,
}: React.PropsWithChildren<Props>) {
  const [opened, setOpened] = useState(isOpen);

  return (
    <S.Container>
      <S.Header>
        {headerContent}

        <S.Collapse onClick={() => setOpened((prev) => !prev)}>
          {collpaseContent}
          <S.CollapseIconWrapper isOpen={opened}>
            <IconChevronUp />
          </S.CollapseIconWrapper>
        </S.Collapse>
      </S.Header>

      {opened && <>{children}</>}

      <S.Footer />
    </S.Container>
  );
}
