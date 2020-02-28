interface MenuData {
  title: string
  links: LinkData[]
}

type LinkData = SimpleLinkData | MenuLinkData

// e.g. "Editorial"
interface SimpleLinkData {
  text: string
  href: string
  dividerBelow?: boolean
}

// e.g. "Art Movement >"
interface MenuLinkData {
  text: string
  menu: MenuData
  dividerBelow?: boolean
}

export const menuData: MenuData = {
  title: "", // root menu, so no title
  links: [
    {
      text: "Artworks",
      menu: {
        title: "Artworks",
        links: [
          {
            text: "New this Week",
            href: "/collection/new-this-week",
          },
          {
            text: "Trending this Month",
            href: "/collection/trending-this-month",
          },
          {
            text: "Exclusively on Artsy",
            href: "/collection/exclusively-on-artsy",
          },
          {
            text: "Closing Soon",
            href: "/collection/unique-works",
            dividerBelow: true,
          },
          {
            text: "Medium",
            menu: {
              title: "Medium",
              links: [
                {
                  text: "Painting",
                  href: "/collection/painting",
                },
                {
                  text: "Prints",
                  href: "/collection/prints",
                },
                {
                  text: "Works on Paper",
                  href: "/collection/works-on-paper",
                },
                {
                  text: "Sculpture",
                  href: "/collection/sculpture",
                },
                {
                  text: "Photography",
                  href: "/collection/photography",
                },
                {
                  text: "Textile Art",
                  href: "/collection/textile-art",
                },
                {
                  text: "Ceramics",
                  href: "/collection/ceramics",
                },
                {
                  text: "Design",
                  href: "/collection/design",
                },
              ],
            },
          },
          {
            text: "Genre",
            menu: {
              title: "Genre",
              links: [
                {
                  text: "Abstraction",
                  href: "/collection/abstract-art",
                },
                {
                  text: "Figuration",
                  href: "/collection/figurative-art",
                },
                {
                  text: "Hyperrealism",
                  href: "/collection/hyperrrealism",
                },
                {
                  text: "Portraits",
                  href: "/collection/portraits",
                },
                {
                  text: "Landscapes",
                  href: "/collection/landscapes",
                },
                {
                  text: "Still Lifes",
                  href: "/collection/still-lifes",
                },
              ],
            },
          },
          {
            text: "Rarity",
            menu: {
              title: "Rarity",
              links: [
                {
                  text: "Unique",
                  href: "/collection/unique-works",
                },
                {
                  text: "Limited Edition",
                  href: "/collection/limited-edition-works",
                },
                {
                  text: "Open Edition",
                  href: "/collection/open-edition-works",
                },
              ],
            },
          },
          {
            text: "Price",
            menu: {
              title: "Price",
              links: [
                {
                  text: "Under $1,000",
                  href: "/collect?price_range=50-1000",
                },
                {
                  text: "$1,000–$5,000",
                  href: "/collect?price_range=1000-5000",
                },
                {
                  text: "$5,000–$10,000",
                  href: "/collect?price_range=5000-10000",
                },
                {
                  text: "$10,000–$50,000",
                  href: "/collect?price_range=10000-50000",
                },
                {
                  text: "$50,000 and Above",
                  href: "/collect?price_range=50000-%2A",
                },
              ],
            },
          },
          {
            text: "Seller Location",
            menu: {
              title: "Seller Location",
              links: [
                {
                  text: "New York City",
                  href: "/new-york-spotlight",
                },
                {
                  text: "Los Angeles",
                  href: "/los-angeles-spotlight",
                },
                {
                  text: "London",
                  href: "/london-gallery-spotlight",
                },
                {
                  text: "Berlin",
                  href: "/berlin-gallery-spotlight",
                },
                {
                  text: "Paris",
                  href: "/paris-gallery-spotlight",
                },
                {
                  text: "Hong Kong",
                  href: "/hong-kong-gallery-spotlight",
                },
                {
                  text: "Mexico City",
                  href: "/mexico-city-gallery-spotlight",
                },
                {
                  text: "More",
                  href: "/galleries",
                },
              ],
            },
            dividerBelow: true,
          },
          { text: "View all artworks", href: "/collect" },
        ],
      },
    },
    {
      text: "Artists",
      menu: {
        title: "Artists",
        links: [
          {
            text: "Leading Women Artists of the 20th Century",
            href: "/collection/leading-women-artists-of-the-20th-century",
          },
          {
            text: "Black Figurative Painters on the Rise",
            href: "/collection/black-figurative-painters-on-the-rise",
          },
          {
            text: "Contemporary Masters of Craft Techniques",
            href: "/collection/contemporary-masters-of-craft-techniques",
          },
          {
            text: "Emerging Abstract Painters to Watch",
            href: "/collection/emerging-abstract-painters-to-watch",
            dividerBelow: true,
          },
          {
            text: "Career Stage",
            menu: {
              title: "Career Stage",
              links: [
                {
                  text: "New & Noteworthy Artists",
                  href: "/collection/new-and-noteworthy-artists",
                },
                {
                  text: "Trending Emerging Artists",
                  href: "/collection/trending-emerging-artists",
                },
                {
                  text: "Critically-Acclaimed Artists",
                  href: "/collection/critically-acclaimed-artists",
                },
                {
                  text: "Top Artists",
                  href: "/collection/blue-chip-artists",
                },
              ],
            },
          },
          {
            text: "Art Movements",
            menu: {
              title: "Art Movements",
              links: [
                {
                  text: "Contemporary",
                  href: "/collection/contemporary",
                },
                {
                  text: "Post-War",
                  href: "/collection/post-war",
                },
                {
                  text: "Impressionism & Modernism",
                  href: "/collection/impressionist-and-modern",
                },
                {
                  text: "Surrealism",
                  href: "/collection/surrealism",
                },
                {
                  text: "Abstract Expressionism",
                  href: "/collection/abstract-expressionism",
                },
                {
                  text: "Pop Art",
                  href: "/collection/pop-art",
                },
                {
                  text: "Minimalism",
                  href: "/collection/minimalism",
                },
                {
                  text: "Street Art",
                  href: "/collection/street-art",
                },
              ],
            },
          },
          {
            text: "Artist Nationality and Region",
            menu: {
              title: "Artist Nationality and Region",
              links: [
                {
                  text: "African",
                  href: "/collection/african",
                },
                {
                  text: "American",
                  href: "/collection/american",
                },
                {
                  text: "Asian",
                  href: "/collection/asian",
                },
                {
                  text: "Australian & Oceanian",
                  href: "/collection/australian-oceanian",
                },
                {
                  text: "British",
                  href: "/collection/british",
                },
                {
                  text: "Canadian",
                  href: "/collection/canadian",
                },
                {
                  text: "Chinese",
                  href: "/collection/chinese",
                },
                {
                  text: "European",
                  href: "/collection/european",
                },
                {
                  text: "French",
                  href: "/collection/french",
                },
                {
                  text: "German",
                  href: "/collection/german",
                },
                {
                  text: "Italian",
                  href: "/collection/italian",
                },
                {
                  text: "Japanese",
                  href: "/collection/japanese",
                },
                {
                  text: "Latin American",
                  href: "/collection/latin-american",
                },
                {
                  text: "Middle Eastern",
                  href: "/collection/middle-eastern",
                },
                {
                  text: "Scandinavian",
                  href: "/collection/scandinavian",
                },
                {
                  text: "South Asian",
                  href: "/collection/south-asian",
                },
              ],
            },
          },
          {
            text: "Top Artists",
            menu: {
              title: "Top Artists",
              links: [
                {
                  text: "Pablo Picasso",
                  href: "/artist/pablo-picasso",
                },
                {
                  text: "Andy Warhol",
                  href: "/artist/andy-warhol",
                },
                {
                  text: "Yayoi Kusama",
                  href: "/artist/yayoi-kusama",
                },
                {
                  text: "Keith Haring",
                  href: "/artist/keith-haring",
                },
                {
                  text: "Takashi Murakami",
                  href: "/artist/takashi-murakami",
                },
                {
                  text: "Jean-Michel Basquiat",
                  href: "/artist/jean-michel-basquiat",
                },
                {
                  text: "Salvador Dalí",
                  href: "/artist/salvador-dali",
                },
                {
                  text: "Tracey Emin",
                  href: "/artist/tracey-emin",
                },
              ],
            },
            dividerBelow: true,
          },
          {
            text: "View all artists",
            href: "/artists",
          },
        ],
      },
    },
    {
      text: "Auctions",
      href: "/auctions",
    },
    {
      text: "Editorial",
      href: "/articles",
    },
    {
      text: "Galleries",
      href: "/galleries",
    },
    {
      text: "Fairs",
      href: "/fairs",
    },
    {
      text: "Shows",
      href: "/shows",
    },
    {
      text: "Museums",
      href: "/institutions",
    },
    {
      text: "Partner with Artsy",
      href: "/gallery-partnerships",
    },
    // TODO: links here for logged-in vs. logged-out state
  ],
}