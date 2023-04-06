import { Schema } from '@sanity/schema'
import skills from "./skills";
import logo from "./logo";
import projects from "./projects";

const schema = Schema.compile({
  name: 'mySchema',
  types: [
    skills,
    logo,
    projects,
  ],
});

export default schema;
