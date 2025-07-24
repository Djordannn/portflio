import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pick4 from "/image/pick4.png";
import pick1 from "/image/pick1.jpg";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { TypeImgAsset } from "@/types/typeImage";
import contentfulClient from "../lib/contentFulClients";
import type { TypePortflioProjectSkeleton } from "@/types/card_portflio";
import type { TypeLynkStoreSkeleton } from "@/types/card_lynkStore";
import type { Entry } from "contentful";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const fromSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Email is not valid" }),
  text: z.string(),
});

const Home = () => {
  const [isData, setData] = React.useState<
    Entry<TypePortflioProjectSkeleton>[]
  >([]);
  const [isDataLynk, setDataLynk] = React.useState<
    Entry<TypeLynkStoreSkeleton>[]
  >([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  // Fetch card_portflio from contentful
  const fetchData_portflio = async () => {
    try {
      setLoading(true);
      const res =
        await contentfulClient.getEntries<TypePortflioProjectSkeleton>({
          content_type: "portflioProject",
        });
      setData(res.items);
    } catch (error) {
      console.log("Erorr fetching data : ", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch lynk_store from contentful
  const fetchData_lynkStore = async () => {
    try {
      setLoading(true);
      const res = await contentfulClient.getEntries<TypeLynkStoreSkeleton>({
        content_type: "lynkStore",
      });
      setDataLynk(res.items);
    } catch (error) {
      console.log("Erorr fetching data : ", error);
    } finally {
      setLoading(false);
    }
  };

  // Form validation
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = (values: z.infer<typeof fromSchema>) => {
    setLoading(true);
    const phoneNumber = "6282157402571";
    const text = `Hi! Saya ${values.name}, ini email ku ${values.email}. Pesan ku "${values.text}"`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData_portflio();
    fetchData_lynkStore();
  }, []);

  return (
    <div className="px-4 sm:px-12 xl:px-[8%] 2xl:px-[10%]">
      <div
        className="py-14 relative -mt-15 xl:-mt-10 lg:grid lg:grid-cols-2 lg:items-center xl:h-[90vh]"
        id="home"
      >
        <div className="w-full sm:w-[500px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px] mx-auto lg:mx-0">
          <img src={pick4} alt="pick4" />
        </div>
        <div className="text-left">
          <h1 className="font-bold text-[32px] leading-11 2xl:text-[36px]">
            Hello Lerr!
            <br />
            <span className="text-[42px] 2xl:text-[48px]">I'm Djordan</span>
          </h1>
          <p className="mb-4 mt-2 w-[90%] sm:w-[60%] leading-7 2xl:text-lg">
            It's a pleasure to have you are. This portofolio is a collection of
            my creative journey
          </p>
          <div>
            <Button
              variant={"outline"}
              className="cursor-pointer"
              onClick={() => {
                toast("Hii!👋", {
                  description: (
                    <span className="text-black">
                      I hope your day is good😁
                    </span>
                  ),
                  action: {
                    label: "Good",
                    onClick: () => console.log("Good"),
                  },
                });
              }}
            >
              Say hello👋
            </Button>
          </div>
        </div>
      </div>
      <div className="py-14 xl:py-24 text-left">
        <div>
          <h1 className="font-bold text-[42px] leading-11">About me"</h1>
          <div className="border-1 border-black w-[20%] rounded-full my-2 lg:w-[10%]"></div>
          <h3 className="2xl:text-lg">Little yapping</h3>
        </div>
        <div className="lg:col-span-2 lg:px-[16%] lg:mt-12 2xl:text-lg 2xl:px-[18%] 2xl:mt-20">
          <blockquote className="text-justify mt-4 lg:text-center leading-7 sm:text-left">
            "I'm someone who finds joy in the everyday, but I also have a
            passion for bringing ideas to life online. As a web developer, I
            appreciate a good book, the perfect cup of coffee, and the
            satisfaction of clean code. I'm always open to learning new things
            in the ever-evolving tech world and enjoy connecting with people
            from all walks of life. While I might not be the loudest in the
            room, I'm a good listener and value genuine connections."
          </blockquote>
        </div>
      </div>
      <div className="py-14 xl:py-24">
        <h1
          className="font-bold text-[42px] scroll-mt-10 lg:scroll-mt-10 xl:scroll-mt-25 leading-11 "
          id="store"
        >
          My projectku <br />
          :v
        </h1>
        <div className="border-1 border-black w-[20%] rounded-full my-2 lg:w-[10%]"></div>
        <Carousel>
          <div className="flex justify-between">
            <h3 className="2xl:text-lg">Pemula puhh</h3>
            <div className="flex gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className="mt-8">
            <CarouselContent>
              {isData.map((value, id) => (
                <CarouselItem
                  key={id}
                  className="sm:basis-[60%] lg:basis-[50%] xl:basis-1/3"
                >
                  {isLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-[300px] sm:h-[550px] w-full rounded-lg" />
                    </div>
                  ) : (
                    <Card className="h-[450px] sm:h-[550px] lg:h-[470px] 2xl:h-[550px]">
                      <CardHeader>
                        <Dialog>
                          <DialogTrigger>
                            <img
                              src={`https:${
                                (value.fields.img as TypeImgAsset)?.fields.file
                                  .url
                              }`}
                              alt="learn"
                              className="h-[300px] sm:h-[400px] lg:h-[320px] 2xl:h-[400px] rounded-lg  w-full object-cover object-center"
                            />
                          </DialogTrigger>
                          <DialogContent className="p-0 h-[350px] sm:h-[500px] ">
                            <img
                              src={`https:${
                                (value.fields.img as TypeImgAsset)?.fields.file
                                  .url
                              }`}
                              alt="learn"
                              className="h-[350px] sm:h-[500px] rounded-lg  w-full object-cover object-center"
                            />
                          </DialogContent>
                        </Dialog>
                      </CardHeader>
                      <CardContent>
                        <CardTitle>
                          {value.fields.title &&
                          typeof value.fields.title === "string"
                            ? value.fields.title
                            : "No Title"}
                        </CardTitle>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {value.fields.badge ? (
                            <Badge variant={"outline"}>
                              {value.fields.badge &&
                              typeof value.fields.badge === "string"
                                ? value.fields.badge
                                : ""}
                            </Badge>
                          ) : (
                            ""
                          )}
                          {value.fields.badge2 ? (
                            <Badge variant={"outline"}>
                              {value.fields.badge2 &&
                              typeof value.fields.badge2 === "string"
                                ? value.fields.badge2
                                : ""}
                            </Badge>
                          ) : (
                            ""
                          )}
                          {value.fields.badge3 ? (
                            <Badge variant={"outline"}>
                              {value.fields.badge3 &&
                              typeof value.fields.badge3 === "string"
                                ? value.fields.badge3
                                : ""}
                            </Badge>
                          ) : (
                            ""
                          )}
                          {value.fields.badge4 ? (
                            <Badge variant={"outline"}>
                              {value.fields.badge4 &&
                              typeof value.fields.badge4 === "string"
                                ? value.fields.badge4
                                : ""}
                            </Badge>
                          ) : (
                            ""
                          )}

                          {value.fields.badge5 ? (
                            <Badge variant={"outline"}>
                              {value.fields.badge5 &&
                              typeof value.fields.badge5 === "string"
                                ? value.fields.badge5
                                : ""}
                            </Badge>
                          ) : (
                            ""
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
      <div className="py-14 xl:py-24">
        <h1 className="font-bold text-[42px] leading-11">
          Product Lynk.id <br />
        </h1>
        <div className="border-1 border-black w-[20%] rounded-full my-2 lg:w-[10%]"></div>
        <Carousel>
          <div className="flex justify-between">
            <h3 className="2xl:text-lg">Aing dodolan</h3>
            <div className="flex gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className="mt-8">
            <CarouselContent>
              {isDataLynk.map((value, id) => (
                <CarouselItem
                  key={id}
                  className="sm:basis-[60%] lg:basis-[50%] xl:basis-1/3"
                >
                  <Card className="h-[450px] sm:h-[550px] lg:h-[470px] 2xl:h-[550px]">
                    <CardHeader className="">
                      <Dialog>
                        <DialogTrigger>
                          <img
                            src={`https:${
                              (value.fields.img as TypeImgAsset)?.fields.file
                                .url
                            }`}
                            alt="learn"
                            className="h-[300px] sm:h-[400px] lg:h-[320px] 2xl:h-[400px] rounded-lg  w-full object-cover object-center"
                          />
                        </DialogTrigger>
                        <DialogContent className="p-0 h-[350px] sm:h-[500px] ">
                          <img
                            src={`https:${
                              (value.fields.img as TypeImgAsset)?.fields.file
                                .url
                            }`}
                            alt="learn"
                            className="h-[350px] sm:h-[500px] rounded-lg  w-full object-cover object-center"
                          />
                        </DialogContent>
                      </Dialog>
                    </CardHeader>
                    <CardContent>
                      <CardTitle>
                        {value.fields.title &&
                        typeof value.fields.title === "string"
                          ? value.fields.title
                          : "No Title"}
                      </CardTitle>
                      <div className="flex gap-2 my-2 flex-wrap">
                        {value.fields.badge ? (
                          <Badge variant={"outline"}>
                            {value.fields.badge &&
                            typeof value.fields.badge === "string"
                              ? value.fields.badge
                              : ""}
                          </Badge>
                        ) : (
                          ""
                        )}
                        {value.fields.badge2 ? (
                          <Badge variant={"outline"}>
                            {value.fields.badge2 &&
                            typeof value.fields.badge2 === "string"
                              ? value.fields.badge2
                              : ""}
                          </Badge>
                        ) : (
                          ""
                        )}
                        {value.fields.badge3 ? (
                          <Badge variant={"outline"}>
                            {value.fields.badge3 &&
                            typeof value.fields.badge3 === "string"
                              ? value.fields.badge3
                              : ""}
                          </Badge>
                        ) : (
                          ""
                        )}
                        {value.fields.badge4 ? (
                          <Badge variant={"outline"}>
                            {value.fields.badge4 &&
                            typeof value.fields.badge4 === "string"
                              ? value.fields.badge4
                              : ""}
                          </Badge>
                        ) : (
                          ""
                        )}
                        {value.fields.badge5 ? (
                          <Badge variant={"outline"}>
                            {value.fields.badge5 &&
                            typeof value.fields.badge5 === "string"
                              ? value.fields.badge5
                              : ""}
                          </Badge>
                        ) : (
                          ""
                        )}
                      </div>
                      <CardDescription>
                        <a
                          href={
                            value.fields.url &&
                            typeof value.fields.url === "string"
                              ? value.fields.url
                              : ""
                          }
                          className="hover:text-black"
                        >
                          {value.fields.url &&
                          typeof value.fields.url === "string"
                            ? value.fields.url
                            : ""}
                        </a>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
      <div className="py-14 xl:py-24">
        <h1
          className="font-bold text-[42px] leading-11 scroll-mt-10 xl:scroll-mt-25"
          id="contact"
        >
          Get in touch
        </h1>
        <div className="border-1 border-black w-[20%] rounded-full my-2 lg:w-[10%]"></div>
        <h3 className="2xl:text-lg">Call me bruhh</h3>
        <div className="mt-4 sm:grid sm:grid-cols-2 sm:items-center">
          <div>
            <img src={pick1} alt="pick1" className="w-full" />
          </div>
          <div className="mt-4 flex justify-end">
            <Card className="w-full xl:w-[90%] 2xl:px-[8%] 2xl:py-[12%]">
              <CardHeader>
                <CardTitle className="text-2xl leading-7 2xl:text-3xl">
                  Give me your
                  <br /> beautiful name
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 2xl:gap-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              required
                              placeholder="Input your name"
                              {...field}
                              className="border-black"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@gmail.com"
                              {...field}
                              className="border-black"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="text"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Type here..."
                              {...field}
                              className="border-black"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button className="cursor-pointer">
                      {isLoading ? "..." : "Send"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
