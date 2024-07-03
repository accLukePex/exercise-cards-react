interface LinksProps {
  name: string;
}

const Links: React.FC<LinksProps> = (props) => {
  return <a href="#">{props.name}</a>;
};

export default Links;
