import type {ReactNode} from 'react';

type Point = {
  desc: ReactNode;
  name: string;
};

type Properties = {
  points: Point[];
};

const PointList = ({points}: Properties) => (
  <ul className="border-line-soft border-t">
    {points.map(({desc, name}) => (
      <li key={name} className="border-line-soft border-b py-[1.4rem]">
        <strong className="text-ink mb-1.5 block text-[1.05rem] font-medium tracking-[-0.005em]">
          {name}
        </strong>
        <p className="text-ink-dim m-0 max-w-[64ch] text-[0.97rem] leading-[1.65]">
          {desc}
        </p>
      </li>
    ))}
  </ul>
);

export default PointList;
