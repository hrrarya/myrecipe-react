const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="recipe-footer">
      <p className="text-center border-t py-2 shadow-sm">
        ©Copyrights {year}- by Hridoy
      </p>
    </div>
  );
};

export default Footer;
