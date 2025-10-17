const FooterDate = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <p className="text-center text-white">Copyright © {date} Zelalem Legesse.</p>
    </div>
  );
};

export default FooterDate;