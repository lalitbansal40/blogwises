"use client"
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
type props = {
    title: string;
    description: string;
    imageurl?: string;
    category?: string;
  };
export default function BlogCard({ title, description, imageurl }: props) {
  return (
    <Card className="bg-white w-[300px] h-[450px] flex flex-col justify-between overflow-hidden">
    <CardHeader className="pb-0 pt-2 px-4">
      <h4 className="font-bold text-lg line-clamp-2">{title}</h4>
    </CardHeader>
  
    <CardBody className="py-2 px-4">
      <Image
        alt="Card background"
        className="object-cover rounded-xl w-full h-[180px]"
        src={imageurl}
        width={270}
        height={180}
      />
      <p className="mt-2 text-sm line-clamp-[6]">
        {description.split(' ').slice(0, 100).join(' ')}...
      </p>
    </CardBody>
  </Card>
  
  );
}
