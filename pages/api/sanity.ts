import sanityClient, { SanityDocument } from '@sanity/client';

interface Logo {
  name: string;
  image: {
    asset: {
      _ref: string;
    }
  }
}

interface Skill {
  name: string;
  icon: {
    asset: {
      _ref: string;
    }
  }
}

export interface SanityData {
  logo: SanityDocument<Logo>[];
  skills: SanityDocument<Skill>[];
}

const client = sanityClient({
  projectId: 'bz3yi40h',
  dataset: 'portfolio',
  useCdn: false,
});

export const fetcLogo = async () => {
  const logoQuery = '*[_type == "logo"]';
  const logo = await client.fetch<SanityDocument<Logo>[]>(logoQuery, { dataset: "portfolio" });

  return  logo
    
};

export const fetcSkills = async () => {
  const skillQuery = '*[_type == "skills"]';
  const skills = await client.fetch<SanityDocument<Skill>[]>(skillQuery, { dataset: "portfolio" });

  return  skills   
};
