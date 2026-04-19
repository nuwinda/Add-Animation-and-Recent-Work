import imgMainPhoto from "figma:asset/d6357cb650e2c6271722681aca236642dcf18f9e.png";
import imgRectangle3 from "figma:asset/f0e39d0b53feea740b40eb7a86c70cf6af47236b.png";
import imgRectangle4 from "figma:asset/eef414e003559a055e07cfa1501cee7456af6ebc.png";
import imgRectangle5 from "figma:asset/cecd0d25b58b5923a9a3869068e4100c512ad43d.png";
import imgRectangle6 from "figma:asset/3a03317223e0ad3689b248e0e5afa2fbd66913c1.png";
import imgRectangle8 from "figma:asset/e2ce841658d34aec49bcb135cae4c7fb72387fbc.png";
import imgRectangle9 from "figma:asset/6e96637162a99a3f708709831dbe3955eb765b69.png";

function NavBar() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(8.33%-18.67px)] not-italic top-[22px] whitespace-nowrap" data-name="Nav Bar">
      <p className="absolute font-['Inria_Serif:Regular',sans-serif] left-[calc(8.33%-18.67px)] text-[18px] text-black top-[22px]">Sakshmina Dinushan</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] left-[calc(16.67%+71.67px)] text-[#505050] text-[14px] top-[27px]">Wedding Photography</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] left-[calc(83.33%+76.33px)] text-[#505050] text-[14px] top-[27px]">Contact</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] left-[calc(75%+89px)] text-[#505050] text-[14px] top-[27px]">{`Offering `}</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] left-[calc(66.67%+73.67px)] text-[#505050] text-[14px] top-[27px]">Recent Work</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] left-[calc(66.67%-6.33px)] text-[#505050] text-[14px] top-[27px]">About</p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute contents left-[calc(8.33%-18.67px)] top-[22px]" data-name="Hero section">
      <NavBar />
      <div className="absolute h-[832px] left-[calc(8.33%-18.67px)] top-[65px] w-[1104px]" data-name="main Photo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[199.8%] left-0 max-w-none top-[-99.86%] w-[100.36%]" src={imgMainPhoto} />
        </div>
      </div>
      <div className="absolute font-['Inria_Serif:Regular',sans-serif] leading-[0] left-[calc(16.67%-16.33px)] not-italic text-[0px] text-[rgba(0,0,0,0.8)] top-[235px] whitespace-nowrap">
        <p className="mb-0 text-[48px] whitespace-pre">
          <span className="font-['Gentium_Basic:Italic',sans-serif] italic leading-[1.18]">VISUAL</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.18] not-italic tracking-[-1.056px]">{` `}</span>
        </p>
        <p className="font-['Gentium_Book_Basic:Regular',sans-serif] leading-[1.18] mb-0 text-[48px] tracking-[-1.056px] whitespace-pre">STORYTELLER</p>
        <p className="font-['Gentium_Book_Basic:Regular',sans-serif] leading-[1.18] mb-0 text-[48px] tracking-[-1.056px] whitespace-pre">FOR THE WILDLY</p>
        <p className="font-['Gentium_Basic:Italic',sans-serif] italic leading-[1.18] text-[48px] whitespace-pre">IN LOVE</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents left-0 top-[832px]" data-name="Title 2">
      <div className="absolute bg-[#ede0c2] h-[175px] left-0 top-[832px] w-[413px]" />
      <p className="absolute font-['Imprima:Regular',sans-serif] leading-[0] left-[calc(8.33%+3.33px)] not-italic text-[36px] text-black top-[899px] whitespace-nowrap">
        <span className="font-['Gentium_Book_Basic:Regular',sans-serif] leading-[1.18]">Recent</span>
        <span className="leading-[1.18]">{` `}</span>
        <span className="font-['Gentium_Basic:Italic',sans-serif] italic leading-[1.18]">Work</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(16.67%+4.67px)] p-[10px] top-[1241px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inria_Serif:Light',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">SEE ALBUM</p>
    </div>
  );
}

function RecentWork() {
  return (
    <div className="absolute contents left-[calc(16.67%+4.67px)] top-[1072px]" data-name="Recent Work 1">
      <div className="absolute h-[468px] left-[calc(58.33%+43.33px)] shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1072px] w-[383px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133%] left-[-8.88%] max-w-none top-[-16.5%] w-[117.75%]" src={imgRectangle3} />
        </div>
      </div>
      <div className="absolute h-[272px] left-[calc(33.33%+50.33px)] shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1437px] w-[434px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[239.22%] left-[-0.11%] max-w-none top-[-38.35%] w-full" src={imgRectangle4} />
        </div>
      </div>
      <div className="absolute font-['Inria_Serif:Light',sans-serif] leading-[0] left-[calc(16.67%+4.67px)] not-italic text-[24px] text-black top-[1152px] whitespace-nowrap">
        <p className="leading-[1.18] mb-0">{`Romantic & Allegiant`}</p>
        <p className="leading-[1.18]">Wedding</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(66.67%+99.67px)] p-[10px] top-[1951px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inria_Serif:Light',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">SEE ALBUM</p>
    </div>
  );
}

function RecentWork1() {
  return (
    <div className="absolute contents left-[calc(8.33%+1.33px)] top-[1817px]" data-name="Recent Work 2">
      <div className="absolute font-['Inria_Serif:Light',sans-serif] leading-[0] left-[calc(66.67%-6.33px)] not-italic text-[24px] text-black top-[1859px] whitespace-nowrap">
        <p className="leading-[1.18] mb-0 whitespace-pre">{`We capture the most magical `}</p>
        <p className="leading-[1.18] whitespace-pre">moments of your life...</p>
      </div>
      <Frame1 />
      <div className="absolute h-[488px] left-[calc(8.33%+1.33px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1817px] w-[389px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-83.97%] max-w-none top-[-0.05%] w-[188.08%]" src={imgRectangle5} />
        </div>
      </div>
      <div className="absolute h-[280px] left-[calc(25%+12px)] shadow-[-5px_4px_4px_0px_rgba(0,0,0,0.25)] top-[2141px] w-[426px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[228.1%] left-[0.11%] max-w-none top-[-34.9%] w-full" src={imgRectangle6} />
        </div>
      </div>
    </div>
  );
}

function SlideDout() {
  return (
    <div className="absolute h-[10px] left-[calc(41.67%+71.67px)] top-[3103px] w-[70px]" data-name="SLIDE DOUT">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 10">
        <g id="SLIDE DOUT">
          <circle cx="5" cy="5" fill="var(--fill-0, #3F3F3F)" id="Ellipse 1" r="5" />
          <circle cx="35" cy="5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 2" r="5" />
          <circle cx="65" cy="5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="5" />
        </g>
      </svg>
    </div>
  );
}

function SlideForAllPic() {
  return (
    <div className="absolute contents left-0 top-[2453px]" data-name="SLIDE FOR ALL PIC - 3">
      <div className="absolute bg-[#996a4d] h-[686px] left-0 top-[2453px] w-[1280px]" />
      <p className="absolute font-['Gentium_Book_Basic:Regular',sans-serif] leading-[1.18] left-[calc(50%+10px)] not-italic text-[24px] text-white top-[2961px] whitespace-nowrap">{`Wikum & Sachini`}</p>
      <div className="absolute font-['Glory:Light',sans-serif] font-light leading-[0] left-[calc(50%+10px)] text-[18px] text-white top-[2770px] whitespace-nowrap">
        <p className="leading-[1.18] mb-0 whitespace-pre">{`Let your customers review you and tell their `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">{`friends how great you are. Testimonials provide `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">{`a sense of what it's like to work with you, or `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">{`what it's like to use your products and `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">{`services. This can show people that you're `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">{`credible and reliable, and can build trust with `}</p>
        <p className="leading-[1.18] whitespace-pre">potential customers.”</p>
      </div>
      <p className="absolute font-['Imprima:Regular',sans-serif] leading-[0] left-[calc(33.33%+90.33px)] not-italic text-[0px] text-white top-[2477px] whitespace-nowrap">
        <span className="leading-[1.18] text-[40px]">LOVING</span>
        <span className="leading-[1.18] text-[40px]">{` `}</span>
        <span className="font-['Gentium_Basic:Italic',sans-serif] italic leading-[1.18] text-[40px]">WORDS</span>
      </p>
      <div className="absolute h-[411px] left-[calc(16.67%+3.67px)] top-[2607px] w-[328px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[224%] left-[-38.41%] max-w-none top-[-66.32%] w-[187.21%]" src={imgRectangle8} />
        </div>
      </div>
      <div className="absolute font-['Gentium_Book_Basic:Regular',sans-serif] leading-[0] left-[calc(50%+10px)] not-italic text-[24px] text-white top-[2638px] whitespace-nowrap">
        <p className="leading-[1.18] mb-0 whitespace-pre">{`“I'm a testimonial. Click to `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">{`edit me and add text that `}</p>
        <p className="leading-[1.18] mb-0 whitespace-pre">says something nice about</p>
        <p className="leading-[1.18] whitespace-pre">you and your services.</p>
      </div>
      <SlideDout />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(41.67%+55.67px)] p-[10px] top-[3835px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inria_Serif:Light',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">REACH OUT</p>
    </div>
  );
}

function ReachOutSection() {
  return (
    <div className="absolute contents left-[calc(16.67%-16.33px)] top-[3223px]" data-name="Reach Out section">
      <div className="absolute h-[441px] left-[calc(16.67%-16.33px)] top-[3223px] w-[541px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[184.36%] left-[100.04%] max-w-none top-[-71.61%] w-[-100.16%]" src={imgRectangle9} />
        </div>
      </div>
      <div className="absolute bg-[#ede4d8] h-[482px] left-[calc(41.67%-11.33px)] shadow-[-6px_-3px_4px_0px_rgba(0,0,0,0.25)] top-[3443px] w-[541px]" />
      <div className="absolute font-['Josefin_Sans:Light',sans-serif] font-light leading-[0] left-[calc(41.67%+55.67px)] text-[20px] text-black top-[3725px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 whitespace-pre">{`I'm a paragraph. Click here to add your own text and edit `}</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">{`me. It’s easy. Just click “Edit Text” or double click me to `}</p>
        <p className="leading-[1.5] whitespace-pre">add your own content and make changes to the font.</p>
      </div>
      <div className="absolute font-['Inria_Serif:Light',sans-serif] leading-[0] left-[calc(41.67%+55.67px)] not-italic text-[0px] text-black top-[3489px] whitespace-nowrap">
        <p className="mb-0 text-[36px] text-[rgba(0,0,0,0.8)] tracking-[-0.792px] whitespace-pre">
          <span className="font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[1.5]">PLANNING</span>
          <span className="font-['Gentium_Book_Basic:Regular',sans-serif] leading-[1.5] not-italic">{` `}</span>
        </p>
        <p className="mb-0 text-[36px] text-[rgba(0,0,0,0.8)] whitespace-pre">
          <span className="font-['Gentium_Book_Basic:Italic',sans-serif] italic leading-[1.5]">TOGETHER</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic tracking-[-0.792px]">{` `}</span>
          <span className="font-['Josefin_Sans:Medium',sans-serif] font-medium leading-[1.5] tracking-[-0.792px]">THE</span>
        </p>
        <p className="font-['Josefin_Sans:Medium',sans-serif] font-medium leading-[1.5] mb-0 text-[36px] text-[rgba(0,0,0,0.8)] tracking-[-0.792px] whitespace-pre">BEST DAY OF</p>
        <p className="font-['Gentium_Book_Basic:Italic',sans-serif] italic leading-[1.5] text-[36px] text-[rgba(0,0,0,0.8)] whitespace-pre">YOUR LIFE</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[251px] left-0 top-[4189px] w-[1280px]"}>
      <div className="absolute left-0 size-[250px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <div className="absolute left-[284px] size-[250px] top-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-49.79%] max-w-none top-[-0.14%] w-[149.93%]" src={imgRectangle5} />
        </div>
      </div>
      <div className="absolute left-[568px] size-[250px] top-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.04%] left-[0.09%] max-w-none top-[-37.86%] w-full" src={imgMainPhoto} />
        </div>
      </div>
      <div className="absolute left-[852px] size-[250px] top-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.93%] left-[0.09%] max-w-none top-[-16.4%] w-full" src={imgRectangle4} />
        </div>
      </div>
      <div className="absolute left-[1136px] size-[250px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <div className="absolute left-[1704px] size-[250px] top-px">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9} />
      </div>
      <div className="absolute left-[1420px] size-[250px] top-px">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}

function InstagramSection() {
  return (
    <div className="absolute contents left-0 top-[4009px]" data-name="Instagram section">
      <Frame3 />
      <div className="absolute font-['Imprima:Regular',sans-serif] leading-[0] left-[calc(8.33%+1.33px)] not-italic text-[0px] text-black top-[4009px] whitespace-nowrap">
        <p className="leading-[1.18] mb-0 text-[40px]">FOLLOW ME</p>
        <p className="text-[40px]">
          <span className="leading-[1.18]">{`ON `}</span>
          <span className="font-['Gentium_Basic:Italic',sans-serif] italic leading-[1.18] text-black">INSTAGRAM</span>
        </p>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="absolute contents left-0 top-[4543px]" data-name="Footer section">
      <div className="absolute bg-[#747761] h-[359px] left-0 top-[4543px] w-[1280px]" />
      <p className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(8.33%-17.67px)] text-[18px] text-white top-[4782px] whitespace-nowrap">
        © 2026 by Sakshmina Dinushan.
        <br aria-hidden="true" />
        Powered and secured by Nuwinda Lakshan
      </p>
      <div className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[0] left-[calc(25%+92px)] text-[18px] text-white top-[4614px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 whitespace-pre">{`Sakshmina is a wedding photographer based in Sri Lanka whose style `}</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">{`is candid and inspiring, with a touch of cinematic flair. Experienced `}</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">{`in intimate weddings, destination weddings and elopements, he `}</p>
        <p className="leading-[1.5] whitespace-pre">is available for world travel wherever love may take him.</p>
      </div>
      <p className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(8.33%-18.67px)] text-[18px] text-white top-[4610px] whitespace-nowrap">Sakshmina Dinushan</p>
      <div className="absolute font-['Inria_Serif:Light',sans-serif] leading-[0] left-[calc(8.33%-18.67px)] not-italic text-[14px] text-white top-[4650px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Wedding & Event `}</p>
        <p className="leading-[normal] whitespace-pre">Photograper</p>
      </div>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] leading-[normal] left-[calc(8.33%-18.67px)] not-italic text-[14px] text-white top-[4696px] whitespace-nowrap">sakshmina@dinushan.com</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] leading-[normal] left-[calc(8.33%-17.67px)] not-italic text-[14px] text-white top-[4722px] whitespace-nowrap">+94763200883</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] leading-[normal] left-[calc(66.67%+51.67px)] not-italic text-[14px] text-white top-[4797px] whitespace-nowrap">Contact</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] leading-[normal] left-[calc(58.33%+64.33px)] not-italic text-[14px] text-white top-[4797px] whitespace-nowrap">{`Offering `}</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] leading-[normal] left-[calc(50%+49px)] not-italic text-[14px] text-white top-[4797px] whitespace-nowrap">Recent Work</p>
      <p className="absolute font-['Inria_Serif:Light',sans-serif] leading-[normal] left-[calc(41.67%+75.67px)] not-italic text-[14px] text-white top-[4797px] whitespace-nowrap">About</p>
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 1">
      <HeroSection />
      <Title />
      <RecentWork />
      <RecentWork1 />
      <SlideForAllPic />
      <ReachOutSection />
      <InstagramSection />
      <FooterSection />
    </div>
  );
}