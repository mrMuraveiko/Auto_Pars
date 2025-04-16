export type PartItem = {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number;
    brand: string;
    compatible: string[]; // для фильтрации по авто
  };
  
  const mockParts: PartItem[] = [
    {
      id: "1",
      title: "Фильтр масляный MANN",
      image: "/images/oil-filter.jpg",
      category: "Фильтры",
      price: 18,
      brand: "MANN",
      compatible: ["BMW X5", "Audi A6"],
    },
    {
      id: "2",
      title: "Свеча зажигания NGK",
      image: "/images/spark-plug.jpg",
      category: "Зажигание",
      price: 8,
      brand: "NGK",
      compatible: ["Toyota Corolla", "KIA Rio"],
    },
    {
      id: "3",
      title: "Амортизатор Bilstein B4",
      image: "/images/shock-absorber.jpg",
      category: "Подвеска",
      price: 60,
      brand: "Bilstein",
      compatible: ["BMW 3", "Ford Focus"],
    },
    {
      id: "4",
      title: "Воздушный фильтр BOSCH",
      image: "/images/air-filter.jpg",
      category: "Фильтры",
      price: 15,
      brand: "BOSCH",
      compatible: ["Audi A4", "Skoda Octavia"],
    },
  ];
  
  export const getParts = (): Promise<PartItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockParts), 500); // эмуляция задержки API
    });
  };