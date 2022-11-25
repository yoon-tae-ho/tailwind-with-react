interface IProps {
  text: string;
}

const NavSubItem = ({ text }: IProps) => {
  return (
    <div className="md:text-right p-4 text-center whitespace-nowrap hover:bg-white/5 transition-colors">
      {text}
    </div>
  );
};

export default NavSubItem;
