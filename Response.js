export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - {context.query.term}",
        totalResults: "214000",
        searchTerms: "{context.query.term}",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "b4014ce9cafcd4c1f",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - {context.query.term}",
        totalResults: "214000",
        searchTerms: "{context.query.term}",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "b4014ce9cafcd4c1f",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.486649,
    formattedSearchTime: "0.49",
    totalResults: "214000",
    formattedTotalResults: "214,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "7.4 - Search Appliance Internationalization",
      htmlTitle: "7.4 - Search Appliance Internationalization",
      link: "https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/internationalization/internationalization.html",
      displayLink: "www.google.com",
      snippet:
        "In some cases, the query needs additional context. For example, a one-word search term may not trigger query rewrite, but adding more terms to the query ...",
      htmlSnippet:
        "In some cases, the <b>query</b> needs additional <b>context</b>. For example, a one-<b>word</b> search <b>term</b> may not trigger <b>query</b> rewrite, but adding more <b>terms</b> to the <b>query</b>&nbsp;...",
      cacheId: "P13-IOmoHT8J",
      formattedUrl:
        "https://www.google.com/support/enterprise/.../internationalization.html",
      htmlFormattedUrl:
        "https://www.google.com/support/enterprise/.../internationalization.html",
    },
    {
      kind: "customsearch#result",
      title:
        "US20050038781A1 - Method and system for interpreting multiple ...",
      htmlTitle:
        "US20050038781A1 - Method and system for interpreting multiple ...",
      link: "https://google.com/patents/US20050038781?cl=sv",
      displayLink: "google.com",
      snippet:
        "Feb 17, 2005 ... ... the terms in the query, determining context-independent scores ... of contextual information when interpreting multiple-term queries.",
      htmlSnippet:
        "Feb 17, 2005 <b>...</b> ... the <b>terms</b> in the <b>query</b>, determining <b>context</b>-independent scores ... of <b>contextual</b> information when interpreting multiple-<b>term queries</b>.",
      formattedUrl: "https://google.com/patents/US20050038781?cl=sv",
      htmlFormattedUrl: "https://google.com/patents/US20050038781?cl=sv",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:10/657,426",
            "dc.description":
              "A query interpretation method and system uses a combination of context-independent and contextual evaluation to compute interpretations for multiple-term queries. The present invention can be used to search a collection of items, each of which is associated with one or more terms. In certain embodiments, query interpretation involves generating several candidate multiple-term interpretations and scoring them to select one or more interpretations. In certain embodiments, query interpretation involves identifying single-term interpretations for the terms in the query, determining context-independent scores for those single-term interpretations, pruning candidate single-term interpretations, identifying a plurality of candidate multiple-term interpretations, determining a contextual score for each candidate multiple-term interpretation, which may involve using different semantic approaches, and generating one or more multiple-term interpretations that are optimal with respect to a combination of the context-inde",
            citation_patent_publication_number: "US:20050038781:A1",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:5206949",
            "dc.title":
              "Method and system for interpreting multiple-term queries",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/35/bc/0f/982e3e69ee8a00/US20050038781A1.pdf",
            "dc.date": "2003-09-08",
            "dc.contributor": "Adam Ferrari",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "EP1782380A4 - Search systems and methods using in-line ...",
      htmlTitle: "EP1782380A4 - Search systems and methods using in-line ...",
      link: "http://www.google.com/patents/EP1782380A4?cl=fr",
      displayLink: "www.google.com",
      snippet:
        "When the user submits a search query via the contextual search interface, ... to a page in which that term appears and a context identifier for the page.",
      htmlSnippet:
        "When the user submits a search <b>query</b> via the <b>contextual</b> search interface, ... to a page in which that <b>term</b> appears and a <b>context</b> identifier for the page.",
      formattedUrl: "www.google.com/patents/EP1782380A4?cl=fr",
      htmlFormattedUrl: "www.google.com/patents/EP1782380A4?cl=fr",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "EP:05774749A",
            "dc.description":
              "Systems and methods are provided for implementing searches using contextual information associated with a Web page (or other document) that a user is viewing when a query is entered. The page includes a contextual search interface that has an associated context vector representing content of the page. When the user submits a search query via the contextual search interface, the query and the context vector are both provided to the query processor and used in responding to the query.",
            citation_patent_publication_number: "EP:1782380:A4",
            "dc.type": "patent",
            citation_reference:
              'SUGIYAMA KAZUNARI ET AL: "Adaptive Web search based on user profile constructed without any effort from users", INTERNATIONAL WORLD WIDE WEB CONFERENCE, XX, XX, 17 May 2004 (2004-05-17), pages 675 - 684, XP002434325',
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:5619709",
            "dc.title":
              "Search systems and methods using in-line contextual queries",
            "dc.date": "2005-07-21",
            "dc.contributor": "Reiner Kraft",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "US7953746B1 - Contextual query revision - Google Patents",
      htmlTitle:
        "US7953746B1 - <b>Contextual query</b> revision - Google Patents",
      link: "http://www.google.com/patents/US7953746",
      displayLink: "www.google.com",
      snippet:
        "In some implementations, the contextual query processing system 200 can include a search interface 202, a query analysis module 204, and a replacement term ...",
      htmlSnippet:
        "In some implementations, the <b>contextual query</b> processing system 200 can include a search interface 202, a <b>query</b> analysis module 204, and a replacement <b>term</b>&nbsp;...",
      formattedUrl: "www.google.com/patents/US7953746",
      htmlFormattedUrl: "www.google.com/patents/US7953746",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRt8HUAFBZ1vpYXG691rGui0a7R6TwnYLW69UMZgBpbl5RWVK3L8L9QrQ",
            width: "116",
            height: "120",
          },
        ],
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:11/952,770",
            citation_patent_number: "US:7953746",
            "dc.description":
              "Apparatus, systems and methods for contextual query revision are disclosed. A current search query is received during a search session. The current search query includes one or more current search tokens. Potentially inaccurate search tokens are identified from the one or more current search tokens. A possible replacement token is identified based upon the potentially inaccurate search token. A group of related tokens is identified from query logs, and a modified search query is generated if the replacement token is not included in the related tokens.",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:6154213",
            "dc.title": "Contextual query revision",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/d5/0f/d4/1211ccb1d218c0/US7953746.pdf",
            "dc.date": "2007-12-07",
            "dc.contributor": "Ashutosh Garg",
          },
        ],
        cse_image: [
          {
            src: "https://patentimages.storage.googleapis.com/ea/42/15/81ea8ccc3c5a40/US07953746-20110531-D00003.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "US8762363B1 - Adding synonym rules based on historic data ...",
      htmlTitle:
        "US8762363B1 - Adding synonym rules based on historic data ...",
      link: "https://www.google.com/patents/US8762363",
      displayLink: "www.google.com",
      snippet:
        "4 shows an example of adding back a general context synonym rule based on ... that are synonyms of one or more terms that occur in the original query 105.",
      htmlSnippet:
        "4 shows an example of adding back a general <b>context</b> synonym rule based on ... that are synonyms of one or more <b>terms</b> that occur in the original <b>query</b> 105.",
      formattedUrl: "https://www.google.com/patents/US8762363",
      htmlFormattedUrl: "https://www.google.com/patents/US8762363",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdv1pifGSm_hl6G0LXAklhKZCDdvshpV4X8LW2qTWN1Ui0OKP1G64YbA",
            width: "92",
            height: "120",
          },
        ],
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:13/532,326",
            citation_patent_number: "US:8762363",
            "dc.description":
              "Methods, systems, and apparatus, including computer programs encoded on a computer storage medium, for adding synonym rules based on historic data. According to one implementation, a method includes receiving an indication that a synonym rule that was previously added to a collection of synonym rules is no longer being added to the collection, and receiving historic usage data relating to the synonym rule. The method also includes determining, using the historic usage data relating to the synonym rule, whether to add the synonym rule to the collection, and, in response to determining to add the synonym rule, adding the synonym rule to the collection.",
            "dc.type": "patent",
            citation_reference:
              'Ananthanarayanan et al., "Rule based synonyms for entity extraction from noisy text", In Proceedings of the second workshop on Analytics for noisy unstructured text data, pp. 31-38, ACM, Jul. 2008.',
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:20020156816:A1",
            "dc.title": "Adding synonym rules based on historic data",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/53/aa/76/863c89bb983ae5/US8762363.pdf",
            "dc.date": "2012-06-25",
            "dc.contributor": "Terry Yang-Hoe Koo",
          },
        ],
        cse_image: [
          {
            src: "https://patentimages.storage.googleapis.com/a2/5d/1b/3dd0edebed8378/US08762363-20140624-D00004.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Lesson Plan Map – Search Education – Google",
      htmlTitle: "Lesson Plan Map – Search Education – Google",
      link: "https://www.google.com/insidesearch/searcheducation/lesson-map.html",
      displayLink: "www.google.com",
      snippet:
        "Lesson Plan Map. Lesson 1: How can appropriate search terms and queries guide targeted searches? ... Create query; Determine appropriate context terms ...",
      htmlSnippet:
        "Lesson Plan Map. Lesson 1: How can appropriate search <b>terms</b> and <b>queries</b> guide targeted searches? ... Create <b>query</b>; Determine appropriate <b>context terms</b>&nbsp;...",
      cacheId: "5Zuei_6fZY8J",
      formattedUrl:
        "https://www.google.com/insidesearch/searcheducation/lesson-map.html",
      htmlFormattedUrl:
        "https://www.google.com/insidesearch/searcheducation/lesson-map.html",
      pagemap: {
        metatags: [
          {
            viewport: "initial-scale=1, minimum-scale=1, width=device-width",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "US20140149401A1 - Per-document index for semantic searching ...",
      htmlTitle:
        "US20140149401A1 - Per-document index for semantic searching ...",
      link: "https://www.google.com/patents/US20140149401",
      displayLink: "www.google.com",
      snippet:
        "For example, a search query is received which comprises keyword terms and surrounding non-keyword terms having a contextual meaning.",
      htmlSnippet:
        "For example, a search <b>query</b> is received which comprises keyword <b>terms</b> and surrounding non-keyword <b>terms</b> having a <b>contextual</b> meaning.",
      formattedUrl: "https://www.google.com/patents/US20140149401",
      htmlFormattedUrl: "https://www.google.com/patents/US20140149401",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLoKmT1KkqcUmkKLuJVZiXJ3_KMPs9INd7bIrL3JQdT1EW9awRx5b5Gw",
            width: "108",
            height: "120",
          },
        ],
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:13/687,135",
            "dc.description":
              "Methods, computer systems, and computer-storage medium for generating a per-document index used for semantic searching is provided. A document is received and parsed into a plurality of section. Each term in each section is translated in order to at least one of a cache index or a term identifier. Subsequent to translating the terms, each section is separately group encoded to generate the per-document index. The per-document index is stored in association with a data store.",
            citation_patent_publication_number: "US:20140149401:A1",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:8396859",
            "dc.title": "Per-document index for semantic searching",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/69/1e/da/9fe23917ad7397/US20140149401A1.pdf",
            "dc.date": "2012-11-28",
            "dc.contributor": "Yue-Sheng Liu",
          },
        ],
        cse_image: [
          {
            src: "https://patentimages.storage.googleapis.com/37/60/2f/ff078867ae4b26/US20140149401A1-20140529-D00002.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "CN105474203A - Contextual searches for documents - Google ...",
      htmlTitle:
        "CN105474203A - <b>Contextual</b> searches for documents - Google ...",
      link: "https://www.google.com/patents/CN105474203A?cl=en",
      displayLink: "www.google.com",
      snippet:
        'As used herein, term " Context query " refers to search for the request of the document creating under specific circumstances and/or access.',
      htmlSnippet:
        "As used herein, <b>term</b> &quot; <b>Context query</b> &quot; refers to search for the request of the document creating under specific circumstances and/or access.",
      formattedUrl: "https://www.google.com/patents/CN105474203A?cl=en",
      htmlFormattedUrl: "https://www.google.com/patents/CN105474203A?cl=en",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "CN:201380079102.0A",
            "dc.description":
              "Example implementations relate to contextually searching for documents. A server may be communicatively coupled to a plurality of storage services. Contextual metadata associated with documents stored using the plurality of storage services may be stored on the server. In response to a contextual query, the plurality of storage services may be searched to identify documents relevant to the contextual query. Relevance of documents to the contextual query may be determined based on the contextual metadata stored on the server.",
            citation_patent_publication_number: "CN:105474203:A",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "CN:1934569:A",
            "dc.title": "Contextual searches for documents",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/9e/36/d0/3e57804544c0c0/CN105474203A.pdf",
            "dc.date": "2013-08-30",
            "dc.contributor": "阿迪·基德隆",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "US7831588B2 - Context-sensitive query expansion - Google Patents",
      htmlTitle:
        "US7831588B2 - <b>Context</b>-sensitive <b>query</b> expansion - Google Patents",
      link: "http://www.google.com/patents/US7831588",
      displayLink: "www.google.com",
      snippet:
        "A method for processing a search query having a plurality of search terms for searching for documents includes segmenting the query to identify two or more ...",
      htmlSnippet:
        "A method for processing a search <b>query</b> having a plurality of search <b>terms</b> for searching for documents includes segmenting the <b>query</b> to identify two or more&nbsp;...",
      formattedUrl: "www.google.com/patents/US7831588",
      htmlFormattedUrl: "www.google.com/patents/US7831588",
      pagemap: {
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:12/026,053",
            citation_patent_number: "US:7831588",
            "dc.description":
              "A method for processing a search query having a plurality of search terms for searching for documents includes segmenting the query to identify two or more units, expanding the query by selecting one or more substitutable units for at least one unit in the query, and calculating a substitution probability for each substitutable unit. For each substitutable unit, a co-occurrence probability is calculated with each of the remaining units in the search query. An occurrence probability is then calculated for each substitutable unit, and a score is calculated based on the combination of the substitution probability, the co-occurrence probability, and occurrence probability. The documents are ranked in an order determined by the score.",
            "dc.type": "patent",
            citation_reference:
              'Bhogal, J., et al., "A Review of Ontology Based Query Expansion", Information Processing and Management, vol. 43, Issue 4, Jul. 2007, pp. 866-886.',
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:5265065",
            "dc.title": "Context-sensitive query expansion",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/31/f6/0a/839b372575da8f/US7831588.pdf",
            "dc.date": "2008-02-05",
            "dc.contributor": "Rosie Jones",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "US20050160082A1 - System and method of context-specific ...",
      htmlTitle:
        "US20050160082A1 - System and method of <b>context</b>-specific ...",
      link: "https://www.google.com/patents/US20050160082",
      displayLink: "www.google.com",
      snippet:
        "The context definition is used in conjunction with a search term provided by ... For example, a popular type of database query includes a simple “keyword” ...",
      htmlSnippet:
        "The <b>context definition</b> is used in conjunction with a search <b>term</b> provided by ... For example, a popular type of database <b>query</b> includes a simple “keyword”&nbsp;...",
      formattedUrl: "https://www.google.com/patents/US20050160082",
      htmlFormattedUrl: "https://www.google.com/patents/US20050160082",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLzLTPrhFoX5l8aVcXFUqPnYHhmk-STqGKpRPbRe3TxixjhQPFIgTX",
            width: "105",
            height: "120",
          },
        ],
        metatags: [
          {
            referrer: "origin-when-crossorigin",
            citation_patent_application_number: "US:10/768,034",
            "dc.description":
              "A user can search a database within a “context” that can be invoked with a context term, or name. The context is pre-defined by a human expert, or curator. The context definition is used in conjunction with a search term provided by the user to efficiently obtain search results that can otherwise be difficult to attain, such as detecting characteristics of data over multiple documents or other database items to infer trends, phenomena, characteristics, or other properties of the data. A context can be a category of items where each item has a distinct name. Search results are presented using the context based on the number of co-occurrences of the search term and terms relating to the context. In a preferred embodiment, the search results are presented as a list with documents having higher co-occurrences ordered at the top of the list. Context definition sets can be created and updated as an ongoing service to a subscriber. Several processing configurations are presented.",
            citation_patent_publication_number: "US:20050160082:A1",
            "dc.type": "patent",
            viewport: "width=device-width, initial-scale=1",
            "dc.relation": "US:5926811",
            "dc.title":
              "System and method of context-specific searching in an electronic database",
            citation_pdf_url:
              "https://patentimages.storage.googleapis.com/25/96/8f/7d5375bf0aa8a3/US20050160082A1.pdf",
            "dc.date": "2004-01-30",
            "dc.contributor": "Kevin Dawson",
          },
        ],
        cse_image: [
          {
            src: "https://patentimages.storage.googleapis.com/34/3c/4d/4093ab425b2ff8/US20050160082A1-20050721-D00004.png",
          },
        ],
      },
    },
  ],
};
