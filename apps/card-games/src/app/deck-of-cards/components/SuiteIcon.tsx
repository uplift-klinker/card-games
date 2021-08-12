import { FunctionComponent, SVGProps } from 'react';
import { Suite } from '@card-games/deck';
import { ReactComponent as Heart } from '../../../assets/heart.svg';
import { ReactComponent as Diamond } from '../../../assets/diamond.svg';
import { ReactComponent as Spade } from '../../../assets/spade.svg';
import { ReactComponent as Club } from '../../../assets/club.svg';

export interface SuiteIconProps {
  suite: Suite;
}

export const SuiteIcon: FunctionComponent<SuiteIconProps> = ({ suite }) => {
  const svgProps: SVGProps<SVGSVGElement> & { title: string } = { title: suite, className: 'h-5 w-5' };
  switch (suite) {
    case Suite.Clubs:
      return <Club {...svgProps} />;
    case Suite.Spades:
      return <Spade {...svgProps} />;
    case Suite.Hearts:
      return <Heart {...svgProps} />;
    case Suite.Diamonds:
      return <Diamond {...svgProps} />;
    default:
      return null;
  }
};
