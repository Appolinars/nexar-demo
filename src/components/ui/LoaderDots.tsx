interface ILoaderDots {
  size?: string | number;
  color?: string;
  duration?: string;
  className?: string;
}

export const LoaderDots = ({
  size = '24',
  color = 'currentColor',
  duration = '0.75s',
  className = '',
}: ILoaderDots) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="4" cy="12" r="3" opacity="1" fill={color}>
        <animate
          id="spinner_qYjJ"
          begin="0;spinner_t4KZ.end-0.25s"
          attributeName="opacity"
          dur={duration}
          values="1;.2"
          fill="freeze"
        />
      </circle>
      <circle cx="12" cy="12" r="3" opacity=".4" fill={color}>
        <animate
          begin="spinner_qYjJ.begin+0.15s"
          attributeName="opacity"
          dur={duration}
          values="1;.2"
          fill="freeze"
        />
      </circle>
      <circle cx="20" cy="12" r="3" opacity=".3" fill={color}>
        <animate
          id="spinner_t4KZ"
          begin="spinner_qYjJ.begin+0.3s"
          attributeName="opacity"
          dur={duration}
          values="1;.2"
          fill="freeze"
        />
      </circle>
    </svg>
  );
};
