enum CampaignType {
  /**
   * Product or brand will be displayed in advertisements on social media such as facebook or instagram
   */
  SOCIAL_MEDIA,
  /**
   * Product or brand will be displayed in advertisements inside search results such as on google or bing
   */
  SEARCH_ENGINE,
  /**
   * Advertisement will be run on television
   */
  TV,
}

interface Client {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of company that has hired us to do advertisement
   */
  name: string;
  /**
   * Our internal person that is assigned with the responsibility of communicating with this client
   */
  defaultCampaignManager: User;

  profile: string;
}

interface User {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of person
   */
  name: string;
  /**
   * Job email address
   */
  email: string;
  /**
   * Password for login (not hashed)
   * (password hashing is not part of this case for the sake of simplicity, and is normally not handled by frontend code anyway)
   */
  password: string;

  profile: string;
}

interface Campaign {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of campaign
   * Normally contains the product name advertised and something relevant to the period it should run in
   */
  name: string;
  /**
   * Where people will encounter the advertisement
   */
  type: CampaignType;
  /**
   * The client that hired us to advertise
   */
  client: Client;
  /**
   * Our internal person that will set up the advertisement and communicate with the client
   * (may deviate from defaultCampaignManager)
   */
  campaignManager: User;
  /**
   * Start date of when advertisement will start to be displayed
   */
  startDate: string;

  url: string;
  /**
   * End date of when advertisement will start to be displayed
   */
  endDate: string;
  /**
   * The amount of currency that will be available to spend.
   * Given in norwegian kroner (NOK)
   */
  budget: number;
}

class ApiClient {
  private readonly campaigns: Campaign[];
  private readonly clients: Client[];
  private readonly users: User[];
  private readonly simulatedRequestTime = 1500;

  constructor() {
    this.users = [
      {
        id: 1,
        name: "Davina Gwendoline",
        profile:
          "https://www.freepnglogos.com/uploads/pubg-png/pubg-png-playerunknown-battlegrounds-windows-central-0.png",
        email: "davina.gwendoline@publicisgroupe.com",
        password: "bfsbw53",
      },
      {
        id: 2,
        name: "Jaylah Suz",
        profile:
          "https://www.freepnglogos.com/uploads/pubg-png/pubg-transparent-png-pictures-icons-and-png-backgrounds-31.png",
        email: "jaylah.suz@publicisgroupe.com",
        password: "th3tg3ht3",
      },
      {
        id: 3,
        name: "Margie Jeremiah",
        profile:
          "https://www.freepnglogos.com/uploads/pubg-png/pubg-png-images-download-for-photo-editing-nsb-pictures-35.png",
        email: "margie.jeremiah@publicisgroupe.com",
        password: "8jnjnvqaa5",
      },
      {
        id: 4,
        name: "Lenard Nita",
        profile:
          "https://www.freepnglogos.com/uploads/pubg-png/pubg-lite-beta-will-available-four-more-countries-34.png",
        email: "lenard.nita@publicisgroupe.com",
        password: "6t4n64h75j43",
      },
      {
        id: 5,
        name: "Leann Adamina",
        profile:
          "https://www.freepnglogos.com/uploads/pumpkin-png/pumpkin-profile-minecraft-guild-clan-website-hosting-26.png",
        email: "leann.adamina@publicisgroupe.com",
        password: "asa533g3",
      },
      {
        id: 6,
        name: "Abilene Bevis",
        profile:
          "https://www.freepnglogos.com/uploads/pumpkin/pumpkin-face-compositor-face-swap-online-13.png",
        email: "abilene.bevis@publicisgroupe.com",
        password: "l66kj5ggcxz",
      },
      {
        id: 7,
        name: "Evonne Isadora",
        profile:
          "https://www.freepnglogos.com/uploads/pumpkin/pumpkin-face-pumpkin-happy-emoticon-vector-graphic--7.png",
        email: "evonne.isadora@publicisgroupe.com",
        password: "vdava3fe2",
      },
      {
        id: 8,
        name: "Madeleine Anson",
        profile:
          "https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png",
        email: "madeleine.anson@publicisgroupe.com",
        password: "hnjnmszzsr43ww",
      },
      {
        id: 9,
        name: "Jennifer Christy",
        profile:
          "https://www.freepnglogos.com/uploads/coloring-pages-of-paw-patrol-image-28.jpg",
        email: "jennifer.christy@publicisgroupe.com",
        password: "53b4ehrwb35",
      },
    ];

    const apple: Client = {
      id: 1,
      name: "Apple",
      profile:
        "https://www.freepnglogos.com/uploads/mac-cosmetic-png-logo/infinite-island-apple-emblem-mac-cosmetic-png-logo-10.png",
      defaultCampaignManager: this.users[0],
    };
    const amazon: Client = {
      id: 2,
      name: "Amazon",
      profile:
        "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/online-pig-weight-calculator-amazon-png-logo-vector-23.png",
      defaultCampaignManager: this.users[2],
    };
    const microsoft: Client = {
      id: 3,
      name: "Microsoft",
      profile:
        "https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png",
      defaultCampaignManager: this.users[5],
    };
    const google: Client = {
      id: 4,
      name: "Google",
      profile: "https://www.freepnglogos.com/uploads/google-old-logo-31.png",
      defaultCampaignManager: this.users[1],
    };
    const samsung: Client = {
      id: 5,
      name: "Samsung",
      profile:
        "https://www.freepnglogos.com/uploads/samsung-simple-logo-transparent-png-25.png",
      defaultCampaignManager: this.users[4],
    };
    const cocaCola: Client = {
      id: 6,
      name: "Coca-Cola",
      profile:
        "https://www.freepnglogos.com/uploads/coca-cola-png-logo/coca-cola-field-logo-png-images-2.png",
      defaultCampaignManager: this.users[6],
    };
    const toyota: Client = {
      id: 7,
      name: "Toyota",
      profile:
        "https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png",
      defaultCampaignManager: this.users[7],
    };
    const mercedesBenz: Client = {
      id: 8,
      name: "Mercedes-Benz",
      profile:
        "https://www.freepnglogos.com/uploads/mercedes-benz-car-logo-png-brand-image-1.png",
      defaultCampaignManager: this.users[6],
    };
    const mcDonalds: Client = {
      id: 9,
      name: "McDonald’s",
      profile:
        "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-clip-art-png-31.png",
      defaultCampaignManager: this.users[2],
    };
    const disney: Client = {
      id: 10,
      name: "Disney",
      profile: "https://www.freepnglogos.com/uploads/d-disney-logo-png-27.png",
      defaultCampaignManager: this.users[3],
    };
    const bmw: Client = {
      id: 11,
      name: "BMW",
      profile:
        "https://www.freepnglogos.com/uploads/mini-cooper-car-logo-brands-png-images-26.png",
      defaultCampaignManager: this.users[9],
    };
    const intel: Client = {
      id: 12,
      name: "Intel",
      profile:
        "https://www.freepnglogos.com/uploads/intel-png-logo/core-inside-intel-i5-png-logo-22.png",
      defaultCampaignManager: this.users[3],
    };
    const facebook: Client = {
      id: 13,
      name: "Facebook",
      profile: "https://www.freepnglogos.com/uploads/facebook-logo-image-0.jpg",
      defaultCampaignManager: this.users[8],
    };
    const nike: Client = {
      id: 14,
      name: "NIKE",
      profile: "https://www.freepnglogos.com/uploads/nike-logo-5.png",
      defaultCampaignManager: this.users[4],
    };
    const americanExpress: Client = {
      id: 15,
      name: "American Express",
      profile:
        "https://www.freepnglogos.com/uploads/eagles-png-logo/au-american-eagles-logo-png-24.png",
      defaultCampaignManager: this.users[1],
    };

    this.clients = [
      apple,
      amazon,
      microsoft,
      google,
      samsung,
      cocaCola,
      toyota,
      mercedesBenz,
      mcDonalds,
      disney,
      bmw,
      intel,
      facebook,
      nike,
      americanExpress,
    ];

    this.campaigns = [
      {
        id: 1,
        name: "Magic Keyboard winter 2020",
        campaignManager: this.users[0],
        client: apple,
        url:
          "https://www.freepnglogos.com/uploads/mac-cosmetic-png-logo/infinite-island-apple-emblem-mac-cosmetic-png-logo-10.png",
        type: CampaignType.SEARCH_ENGINE,
        startDate: "2020-01-05",
        endDate: "2020-02-11",
        budget: 100000,
      },
      {
        id: 2,
        name: "iPad Pro june 2020",
        campaignManager: this.users[0],
        client: apple,
        url:
          "https://www.freepnglogos.com/uploads/mac-cosmetic-png-logo/infinite-island-apple-emblem-mac-cosmetic-png-logo-10.png",
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2020-06-12",
        endDate: "2020-06-18",
        budget: 850000,
      },
      {
        id: 3,
        name: "Big Mac Week 32 - 33",
        campaignManager: this.users[2],
        client: mcDonalds,
        url:
          "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-clip-art-png-31.png",
        type: CampaignType.TV,
        startDate: "2020-08-03",
        endDate: "2020-08-17",
        budget: 1170000,
      },
      {
        id: 4,
        name: "Disney Plus - ALWAYS ON",
        campaignManager: this.users[3],
        client: disney,
        url: "https://www.freepnglogos.com/uploads/d-disney-logo-png-27.png",
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2020-01-01",
        endDate: "2021-01-01",
        budget: 90000,
      },
      {
        id: 5,
        name: "Nike Air Max Plus 2021",
        campaignManager: this.users[4],
        client: nike,
        url: "https://www.freepnglogos.com/uploads/nike-logo-5.png",
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2021-02-04",
        endDate: "2021-04-02",
        budget: 510000,
      },
      {
        id: 6,
        name: "Microsoft Windows 11 Launch 2022",
        campaignManager: this.users[5],
        client: microsoft,
        url:
          "https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png",
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2022-06-12",
        endDate: "2022-08-20",
        budget: 110000,
      },
      {
        id: 7,
        name: "Coca-Cola Citra",
        campaignManager: this.users[6],
        client: cocaCola,
        url:
          "https://www.freepnglogos.com/uploads/coca-cola-png-logo/coca-cola-field-logo-png-images-2.png",
        type: CampaignType.TV,
        startDate: "2022-04-10",
        endDate: "2022-08-12",
        budget: 400000,
      },
      {
        id: 8,
        name: "Corolla",
        campaignManager: this.users[7],
        client: toyota,
        url:
          "https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png",
        type: CampaignType.SEARCH_ENGINE,
        startDate: "2020-01-10",
        endDate: "2020-10-12",
        budget: 850000,
      },
      {
        id: 9,
        name: "Bing",
        campaignManager: this.users[8],
        client: microsoft,
        url:
          "https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png",
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2020-07-10",
        endDate: "2020-07-15",
        budget: 150000,
      },
    ];
  }

  public async requestCampaigns(): Promise<Campaign[]> {
    return this.delay(this.simulatedRequestTime).then(() => this.campaigns);
  }

  public async requestUsers(): Promise<User[]> {
    return this.delay(this.simulatedRequestTime).then(() => this.users);
  }

  public async requestClients(): Promise<Client[]> {
    return this.delay(this.simulatedRequestTime).then(() => this.clients);
  }

  /**
   * Returns user if match or else null
   */
  public async login(email: string, password: string): Promise<User | null> {
    // TODO (Optional task): Implement
    return this.delay(this.simulatedRequestTime).then(() => {
      throw new Error("Not implemented");
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }
}

export { CampaignType, ApiClient };
export type { Client, User, Campaign };
