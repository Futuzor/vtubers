import "../styles/footer.css";

interface Props {
  children: string;
}

const Footer = (props: Props) => {
  return <footer>{props.children}</footer>;
};

export default Footer;
