// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/accordion.mdx": () => import("../content/docs/components/accordion.mdx?collection=docs"), "components/animated-scroll-section.mdx": () => import("../content/docs/components/animated-scroll-section.mdx?collection=docs"), "components/catchme-button.mdx": () => import("../content/docs/components/catchme-button.mdx?collection=docs"), "components/falling-text.mdx": () => import("../content/docs/components/falling-text.mdx?collection=docs"), "components/flip-button.mdx": () => import("../content/docs/components/flip-button.mdx?collection=docs"), "components/globe.mdx": () => import("../content/docs/components/globe.mdx?collection=docs"), "components/index.mdx": () => import("../content/docs/components/index.mdx?collection=docs"), "components/ping.mdx": () => import("../content/docs/components/ping.mdx?collection=docs"), }),
};
export default browserCollections;