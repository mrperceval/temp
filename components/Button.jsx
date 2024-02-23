import Link from "next/link";
import cn from "classnames";

const base = `inline-block md:w-auto active:scale-[0.97] active:border-primary-light py-2 font-semibold tracking-tight border-2  `;

const styles = {
  primary: "bg-primary hover:bg-primary-dark border-primary rounded-sm",
  ghost: "border-white rounded-full",
};

const sizes = {
  small: "text-sm px-6",
  medium: "text-base px-4",
  large: "text-lg px-8",
  xl: "text-2xl px-12",
};

export default function Button({
  id,
  destination,
  label,
  href,
  size,
  type,
  style,
  onClick,
}) {
  if (destination === "internal") {
    return (
      <Link
        id={id}
        className={cn(base, sizes[size], styles[style])}
        href={href}
      >
        {label}
      </Link>
    );
  } else if (type === "submit") {
    return (
      <button
        id={id}
        className={cn(base, sizes[size], styles[style], {
          "w-full": size != "small",
        })}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    );
  } else if (destination === "external") {
    return (
      <a id={id} className={cn(base, sizes[size], styles[style])} href={href}>
        {label}
      </a>
    );
  }
}
