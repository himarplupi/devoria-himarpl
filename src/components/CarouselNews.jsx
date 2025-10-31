import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "./CardNews";

export const CarouselNewsx = ({ data }) => {
  return (
    <div className="block pb-5 ">
      <Carousel className="lg:w-[1220px] w-[343px]" opts={{ align: "start" }}>
        <CarouselContent className="select-none gap-4 p-5">
          {data.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:basis-1/4 sm:basis-1/3 basis-[240px]">
              <Card className="flex-col w-[240px] h-[348px] hover:shadow-2xl" link={item.link}>
                <img
                  src={
                    item.image ||
                    "https://scontent-cgk2-2.cdninstagram.com/v/t39.30808-6/571164698_122220942638104840_4852019872189976156_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzc1MTczMjE0NzUzMTY2Nzk3Mw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=L9ryu3VwupEQ7kNvwFpptGZ&_nc_oc=Adlzd8lfhRMPoOJgkmXo3F6EzrFpuEWlAY9mHNO0NGVkFfFzlmeY2MkNoT8zgwbROT_jx2ya4UcSdFpUs6WZfHKz&_nc_ad=z-m&_nc_cid=1225&_nc_zt=23&_nc_ht=scontent-cgk2-2.cdninstagram.com&_nc_gid=fPQENJSewXELu0Uiz7xwVg&oh=00_AfdFGaDmDg0lBMLvOe5mVzQBHkt4MW9gM_GiR5fyI-hQjQ&oe=69039BE6"
                  }
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-4  gap-1 h-full">
                  <div className="flex gap-2 items-center text-[12px]">
                    <span className="capitalize">{item.postTags?.[0]?.title || "Umum"}</span>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <span>{new Date(item.createdAt).toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" }) || "-"}</span>
                  </div>
                  <p className="font-bold text-[#323232] ">{item.title}</p>
                  <div className="w-full h-full">
                    <p className="text-[#636363] text-[12px] line-clamp-4">{item.content || "-"}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export const CarouselNewsLatest = ({ data }) => {
  return (
    <div className="block">
      <Carousel className="lg:w-[1220px] w-[343px]">
        <CarouselContent className="select-none">
          {data.map((item, index) => (
            <CarouselItem key={index} className="basis-[100%]">
              <Card link={item.link} className="md:flex-row flex-col-reverse gap-3 w-full lg:h-[560px] overflow-hidden">
                <div className="flex flex-col justify-between md:ml-10 md:my-14 ml-5 my-7">
                  <div className="flex flex-col gap-4">
                    <span className="capitalize lg:text-lg text-sm">{item.postTags?.[0]?.title || "-"}</span>
                    <p className="lg:text-3xl text-base font-bold text-[#323232]">{item.title || "-"}</p>
                    <p className="lg:text-lg text-sm text-[#636363] max-md:line-clamp-4">{item.content || "-"}</p>
                  </div>

                  <span className="text-[#222222] text-lg">{new Date(item.createdAt).toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" }) || "-"}</span>
                </div>
                <img src={item.image || "https://placehold.co/600x400?text=Placeholder+Image"} alt={item.title} className="lg:w-[50%] w-full h-auto object-cover rounded-2xl" />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

// export const CarouselNews = ({ data }) => {
//   return (
//     <div className="md:hidden">
//       <Carousel className="w-full">
//         <CarouselContent>
//           {data.map((item, index) => (
//             <CarouselItem key={index} className="basis-[100%] ">
//               <Card className="w-full">
//                 <CardContent>
//                   <img src={item.image} alt={item.title} className="w-full h-45 object-cover rounded-sm mb-3" />
//                   <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">{item.postTags?.[0]?.title || "Umum"}</span>
//                   <h2 className="text-base font-medium mt-1 mb-2 line-clamp-2 ">{item.content}</h2>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// };

// // Carousel untuk Desktop
export const CarouselNewsDesktop = ({ data }) => {
  return (
    <div className="hidden md:block">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <Card className="w-full">
                <CardContent>
                  <img src={item.image} alt={item.title} className="w-full h-auto object-cover rounded-sm mb-3" />
                  <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">{item.postTags?.[0]?.title || "Umum"}</span>
                  <h3 className="text-sm font-medium mt-1 line-clamp-2">{item.content}</h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};
