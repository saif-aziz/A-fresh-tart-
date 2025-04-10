import clsx from "clsx";

function getClassName({ className}) {
    return clsx(
        'text-black text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50',
        className
    )
}

const sizes = {
    small: 'px-4 py-3',
    medium: 'px-6 py-4',
    large: 'w-full px-4 py-3',
  };
  
  const variants = {
    primary: 'bg-white text-black focus:ring-marigold',
    secondary: 'bg-white text-black focus:ring-tomato',
    dark: 'bg-white text-black focus:ring-cyan-400',
};

const Button = ({ 
    children,
    className,
    size = 'small',
    variant = 'dark',
    ...rest
 }) => {
    return (
        <button className={clsx(
            sizes[size],
            variants[variant],
            getClassName({ className })
        )}
        {...rest}
        >
            {children}
        </button>
    )
}

export default Button;