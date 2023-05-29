type Props = {
    name: string;
    description?: string;
    benefits?:string
    image: string;
  };
  
  const Class = ({ name, description, image, benefits }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  
    return (
      <li className="relative inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{description?.slice(0,200)}</p>
          <p className="mt-5">{benefits?.slice(0,200)}</p>
        </div>
        <img style={{width:"70%"}} alt={`${image}`} src={image} />
      </li>
    );
  };
  
  export default Class;