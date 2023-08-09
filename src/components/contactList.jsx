const ContactList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li className="flex flex-col w-[222px]">
        <p className="text-2xl mb-2">Phone</p>
        <div className="flex flex-col gap-y-[7px]">
          <a href="tel:4065550120" className="text-base opacity-[.6]">
            (406) 555-0120
          </a>
          <a href="tel:4805550103" className="text-base opacity-[.6]">
            (480) 555-0103
          </a>
          <a href="tel:2395550108" className="text-base opacity-[.6]">
            (239) 555-0108
          </a>
        </div>
      </li>
      <li className="flex flex-col w-[222px]">
        <p className="text-2xl mb-2">Adress</p>
        <address className="not-italic text-base opacity-[.6]">3891 Ranchview Dr. Richardson, California 62639</address>
      </li>
      <li className="flex flex-col w-[222px]">
        <p className="text-2xl mb-2">Email</p>
        <a href="email:nathan.roberts@example.com" className="text-base opacity-[.6]">
          nathan.roberts@example.com
        </a>
      </li>
    </ul>
  );
};

export default ContactList;
