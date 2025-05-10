import { footerData } from "../utils/data";

function Footer() {
  return (
    <>
      <div className="bg-primary-header px-5 md:px-[52px] lg:px-[104px] pt-[80px]">
        <div className="flex flex-col gap-10 pb-[34px] border-b border-primary-custom lg:flex-row lg:gap-[200px]">
          <div className="max-w-[528px]">
            <h1 className="font-semibold text-[24px] text-secondary-custom">
              Subscribe To Our Newsletter
            </h1>
            <p className="font-medium text-[16px] text-secondary-custom mt-[13px]">
              Join us and get the exclusive sales, product launches, wig tips &
              more directly delivered to your inbox
            </p>
            <input
              type="text"
              className="bg-white rounded-[12px] p-3 mt-[17px] w-full max-w-[300px]"
              placeholder="Enter E-mail Address"
            />
            <button className="bg-primary-custom text-others-light-1 px-3 py-2  gap-[7px] rounded-[26px] flex items-center justify-center mt-[18px]">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold">Contact</h1>
            <p className="mt-[13px] font-medium text-[14px]">
              Call: Join us and get the (Mon-Fri 9AM - 7PM WAT)
            </p>
            <p className="mt-[5px] font-medium text-[14px]">
              Email: lushosahairs@gmail.com
            </p>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="/images/tiktok-icon.png"
                alt="tiktok-icon"
                className="size-[30px]"
              />
              <img
                src="/images/instagram-icon.png"
                alt="instagram-icon"
                className="size-[30px]"
              />
              <img
                src="/images/telegram-icon.png"
                alt="telegram-icon"
                className="size-[30px]"
              />
              <img
                src="/images/telegram-icon.png"
                alt="telegram-icon"
                className="size-[30px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-[18px] flex flex-col sm:flex-row sm:justify-between md:pb-[54px] md:pt-[28px] flex-wrap gap-[35px]">
          {footerData.map((data) => (
            <ul className="text-secondary-custom" key={data.header}>
              <li className="font-semibold mb-[5.2px] text-[20px]">
                {data.header}
              </li>

              {data.contents.map((content) => (
                <li className="font-medium text-[14px] mb-2" key={content}>
                  {content}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="py-2 px-[13px] font-medium text-[14px] flex gap-3 items-start sm:justify-center">
        <img src="/images/created-icon.png" alt="created-icon" />
        <p>2025 LUSHOSA. All Right Reserved | Built by MORROW Hiveforce Team</p>
      </div>
    </>
  );
}

export default Footer;
