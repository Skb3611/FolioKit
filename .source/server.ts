// @ts-nocheck
import * as __fd_glob_5 from "../content/docs/components/ping.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/flip-button.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/catchme-button.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/components/accordion.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "components/accordion.mdx": __fd_glob_1, "components/catchme-button.mdx": __fd_glob_2, "components/flip-button.mdx": __fd_glob_3, "components/index.mdx": __fd_glob_4, "components/ping.mdx": __fd_glob_5, });