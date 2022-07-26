export default async () => {
  return [
    {
      id: 1,
      name: "Bensist",
      description: `I've worked on the Front-end of the admin and employee panel on bensist\n
        My main job was to fix bugs and add new features to the admin and employee panel\n
        I've also worked on designing UI in Figma for both the admin and employee panel and implemented them in the code\n
        `,
      image: "/images/bensist.png",
      link: "https://bensist.com/",
      github:
        "",
      tech: ["nextjs", "tailwindcss", "d3"],
    },
    {
      id: 2,
      name: "Covid tracker",
      description: `A covid tracker application using diseas.sh api data, nextjs tailwindcss and d3. \n
        the globe map was made in observable.hq first then converted to a react component.\n
        the data is refreshed every 4 hours using NextJs ISR .\n
        the first shown data depends on the user's location.
        `,
      image: "/images/covidtracker.png",
      link: "https://covid-tracker-next-tailwind-isr.vercel.app/",
      github:
        "https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr/",
      tech: ["nextjs", "tailwindcss", "d3"],
    },
    {
      id: 3,
      name: "Australian Crypto",
      description:
        "A CryptoCurrency Price Comparing App. It allows user to compare prices of different cryptocurrencies in different platforms available in Australia and filter them.\n",
      image: "/images/cryptoprice.png",
      link: "https://compare-crypto-price.vercel.app/",
      github: "https://github.com/trafargarlaw/compare-crypto-price",
      tech: ["nextjs"],
    },
    {
      id: 4,
      name: "Space tourism",
      description:
        "An imaginary app to explore space tourism.\n made using react, tailwindcss and some threeJs for the 3D visualisation of the planets.\n",
      image: "/images/spacetourism.png",
      link: "https://space-tourism-react-tailwind.vercel.app/",
      github: "https://github.com/trafargarlaw/space-tourism-react-tailwind",
      tech: ["react", "tailwindcss"],
    },
  ];
};
