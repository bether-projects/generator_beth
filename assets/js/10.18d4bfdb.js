(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{267:function(e,t,a){"use strict";a.r(t);var n=a(246),o=a(244),r={name:"Faq",mixins:[n.a,o.a]},s=a(16),i=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"faq-table",attrs:{itemscope:"",itemtype:"https://schema.org/FAQPage"}},[t("b-row",[t("b-col",{staticClass:"faq-container"},[t("div",[t("h5",{staticClass:"font-weight-light text-white"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#about-token-features"},on:{click:function(e){e.preventDefault()}}},[e._v(" Token Features\n                  ")])]),e._v(" "),t("b-collapse",{staticClass:"mt-4",attrs:{id:"about-token-features",visible:"",accordion:"main-accordion"}},[t("div",{staticClass:"accordion mb-3",attrs:{role:"tablist"}},[t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#difference-between-fixed-capped"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                      What's the difference between 100k, Fixed, Capped and Unlimited Supply?\n                                  ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"difference-between-fixed-capped",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[t("b",[e._v("100k")]),t("br"),e._v("\n                                      The number of tokens available to you will be 100.000.\n                                      During deployment, the whole token supply will be produced and given to the Token Owner wallet. \n                                      You can't change the supply later."),t("br"),t("br"),e._v(" "),t("b",[e._v("Fixed Supply")]),t("br"),e._v("\n                                      During deployment, the whole token supply will be produced and given to the Token Owner wallet. \n                                      You can't change the supply later."),t("br"),t("br"),e._v(" "),t("b",[e._v("Capped Supply")]),t("br"),e._v("\n                                      You can specify an initial supply that will be sent to the Token Owner's wallet. \n                                      You can later increase or decrease supply by minting or destroying tokens (if permitted). \n                                      You will not be able to create more tokens than the supply cap."),t("br"),t("br"),e._v(" "),t("b",[e._v("Unlimited Supply")]),t("br"),e._v("\n                                      You can specify an initial supply that will be sent to the Token Owner's wallet. \n                                      You can later increase or decrease supply by minting or destroying tokens (if permitted). \n                                      You will be able to generate an endless number of tokens with no upper restriction.\n                                  ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#difference-between-access"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                      What's the difference between None, Ownable and Role Based Access?\n                                  ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"difference-between-access",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[t("b",[e._v("None")]),t("br"),e._v("\n                                      Because there aren't any operations that require rights, your token doesn't need an access type."),t("br"),t("br"),e._v(" "),t("b",[e._v("Ownable")]),t("br"),e._v("\n                                      Your Token will be assigned an Owner. \n                                      By default, the account used to deploy your Token will be the owner and will be allowed to mint new tokens or execute the finish minting method. \n                                      Token ownership can be transferred to addresses or Smart Contracts.\n                                      "),t("br"),t("br"),e._v(" "),t("b",[e._v("Role Based")]),t("br"),e._v('\n                                      Roles will be assigned to your Token. Accounts having the role "MINTER" will be able to create new tokens. \n                                      Accounts having the "ADMIN" role can add or remove roles from minters and other admins. \n                                      By default, the accounts used to deploy your Token will be ADMIN and MINTER. \n                                      Furthermore, your Token will have the Ownable behavior.\n                                  ')])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#who-can-mint-burn"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                      Who can mint or burn tokens?\n                                  ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"who-can-mint-burn",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[t("b",[e._v("Mint")]),t("br"),e._v("\n                                      Depending on the Token Access Type you have. Only the Token Owner will be allowed to create new tokens if you select Ownable Access. \n                                      Only addresses with the MINTER role will be able to create new tokens if you select role-based access. \n                                      If you select a Capped supply in either scenario, you won't be able to mint more tokens than the specified cap. \n                                      Instead, selecting Limitless supply will allow you to create an unlimited number of tokens."),t("br"),t("br"),e._v(" "),t("b",[e._v("Burn")]),t("br"),e._v("\n                                      Everyone will be allowed to burn the tokens he was holding. Only with consent can a third party burn tokens from other addresses. \n                                      Nobody will be allowed to burn tokens from other addresses without permission, not even the Token Owner.\n                                  ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-operable"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                      What is Operable Token?\n                                  ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-operable",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      There is no mechanism to execute code after a BET20 transfer or approval (i.e. making a payment), \n                                      so to perform an activity, another transaction must be sent and GAS must be paid twice. \n                                      Operable Token simplifies token payments and works without the need for any other listener. \n                                      It enables a callback following a transfer or approval in a single transaction."),t("br"),e._v("\n                                      There are numerous proposed applications for Betherance Smart Contracts that accept BET20 payments."),t("br"),e._v("\n                                      Examples could be:\n                                      "),t("ul",[t("li",[e._v("\n                                              to create a token payable crowdsale\n                                          ")]),e._v(" "),t("li",[e._v("\n                                              selling services for tokens\n                                          ")]),e._v(" "),t("li",[e._v("\n                                              paying invoices\n                                          ")]),e._v(" "),t("li",[e._v("\n                                              making subscriptions\n                                          ")])])])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-token-recover"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                      What is Token Recover?\n                                  ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-token-recover",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      Many tokens have been lost forever in Smart Contracts. \n                                      Every Betherance contract has the potential to be a token trap for BET20 tokens. \n                                      They cannot be recovered, resulting in financial damages for end users."),t("br"),e._v("\n                                      TokenRecover enables the contract owner to recover any BET20 token that was sent into the contract by mistake. \n                                      BET20 Token Recover is responsible for this behavior.\n                                  ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#will-copyright-be-an-issue"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                      Will be having Betherance - BET20 Token Create Copyright an issue?\n                                  ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"will-copyright-be-an-issue",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                    Betherance is an BET20 token. \n                                    Create code is released under the MIT License, so if you use HelloBET20 for FREE or SimpleBET20, \n                                    your Smart Contract will include a view function named "generator" that displays a link to this website. \n                                    There will also be a disclaimer in the source code. \n                                    It will not be a problem for you because your Token will be completely compliant with the BET20 standard. \n                                    You can get rid of it by selecting a token type and using the delete Copyright feature.\n                                  ')])])],1)],1)],1)])],1),e._v(" "),t("div",[t("h5",{staticClass:"font-weight-light text-white"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#about-token-behaviours"},on:{click:function(e){e.preventDefault()}}},[e._v(" Token Behaviours\n                    ")])]),e._v(" "),t("b-collapse",{staticClass:"mt-4",attrs:{id:"about-token-behaviours",accordion:"main-accordion"}},[t("div",{staticClass:"accordion mb-3",attrs:{role:"tablist"}},[t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#where-is-my-token-address"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Where is my Token address?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"where-is-my-token-address",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      When you confirm your transaction, you will receive the transaction hash (first) and the Token address (second). \n                                      If your transaction takes a while to confirm due to network issues, \n                                      you can keep an eye on it and your Token will be available in the transaction page. \n                                      For more information, watch the video instruction above.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#who-will-be-token-owner"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Who will be Token Owner?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"who-will-be-token-owner",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      Once your Token is distributed, you will be the sole owner (via your MetaMask address).\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#where-token-supply-will-go"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Where will token supply go after deploy?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"where-token-supply-will-go",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      The address used to deploy the token (your MetaMask address) will hold the initial token supply. \n                                      This address will be the Token Owner and will have the ability to generate new tokens \n                                      (if you chose a token type with Mintable behavior).\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#which-wallet-support"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Which wallet will my Token be supported by?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"which-wallet-support",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      Your Token will be completely BET20 compliant. Your Token will be supported by any BET20 wallet.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#how-to-mint-new-tokens"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        How to mint new tokens?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"how-to-mint-new-tokens",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                      To create new tokens, utilize the "mint" function in the token owner wallet. \n                                      You can do this by going to your Betherance token page and clicking the Contract/Write option.'),t("br"),e._v(" "),t("small",[e._v("\n                                        Keep in mind that your tokens have a number of decimals (typically 18), \n                                        so use the complete number with decimals."),t("br"),e._v("\n                                        For example, if you need to generate 500 more tokens, enter 500000000000000000000 into the mint function.\n                                      ")])])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#will-my-token-be-verified"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Will my Token Source Code be verified on Betherance?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"will-my-token-be-verified",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                      Yes, "Similar Match" will already have validated your token source code. \n                                      This signifies that your source code is comparable to that of other tokens generated by this generator.\n                                    ')])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#can-i-add-logo"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Can I add logo and information to my token on Betherance?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"can-i-add-logo",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      Once your token has been distributed, you will be able to enter data into Betherance utilizing their procedure.\n                                    ")])])],1)],1)],1)])],1),e._v(" "),t("div",[t("h5",{staticClass:"font-weight-light text-white"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#about-bsc"},on:{click:function(e){e.preventDefault()}}},[e._v(" Betherance Blockchain and Ecosystem\n                    ")])]),e._v(" "),t("b-collapse",{staticClass:"mt-4",attrs:{id:"about-bsc",accordion:"main-accordion"}},[t("div",{staticClass:"accordion mb-3",attrs:{role:"tablist"}},[t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-a-dapp"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is a DApp?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-a-dapp",accordion:"bsc-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      DApp is an acronym for decentralized application."),t("br"),e._v("\n                                      The backend code of a DApp runs on a decentralized peer-to-peer network. \n                                      In contrast, consider an app where the backend code is hosted on centralized servers."),t("br"),e._v("\n                                      A DApp, like any other app, can have frontend code and user interfaces written in any language \n                                      that can make calls to its backend. Its frontend can also be hosted on decentralized storage systems like Swarm or IPFS."),t("br"),e._v("\n                                      To be deemed a Dapp (pronounced Dee-app, similar to Email), an application must meet the following criteria:\n                                        "),t("ul",[t("li",[e._v("\n                                              The application must be totally open-source, independent, and without a single party \n                                              controlling the bulk of its tokens. The application's protocol may be modified in \n                                              response to proposed enhancements and market feedback, but all modifications must \n                                              be approved by a majority of its users.\n                                            ")]),e._v(" "),t("li",[e._v("\n                                              To avoid any central points of failure, the application's data and operational \n                                              logs must be cryptographically saved in a public, decentralized blockchain.\n                                            ")]),e._v(" "),t("li",[e._v("\n                                              The program must employ a cryptographic token (bitcoin or a token unique to its system) \n                                              for access, and any value contribution from (miners / farmers) should be paid in the application's tokens.\n                                            ")]),e._v(" "),t("li",[e._v("\n                                              The program must issue tokens in accordance with a standard cryptographic \n                                              algorithm that serves as proof of the value nodes contribute to \n                                              the application (Bitcoin employs the Proof of Work Algorithm).\n                                            ")])])])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-a-bep20-token"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is a BET20 token?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-a-bep20-token",accordion:"bsc-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      BET20 is a Betherance token standard that extends BET20, the most prevalent \n                                      Betherance token standard. Consider it a template for tokens that describes how they can be used, who can spend them, and other usage constraints. \n                                      It is interoperable with Betherance's BET20 due to their similarities."),t("br"),e._v("\n                                      BET20 was designed as a technical standard for Betherance, with the purpose of providing \n                                      a versatile structure for developers to create a variety of tokens. \n                                      These could be anything from firm shares to dollars deposited in a bank vault (i.e., a stablecoin).\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-gas"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is GAS and how to set Gas price?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-gas",accordion:"bsc-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                      The term "Gas" refers to a particular unit used in BSC. \n                                      It quantifies the amount of "effort" required to complete an action or group of actions.'),t("br"),e._v("\n                                      Every operation that can be carried out by a transaction or contract on \n                                      the BSC platform has a set gas cost, with more computationally intensive operations \n                                      having higher gas costs than operations with fewer computationally intensive operations."),t("br"),e._v("\n                                      Gas is crucial since it makes sure the right cost is being paid by transactions sent \n                                      to the network, which is why. We prevent the network from becoming clogged with \n                                      completing a lot of intensive work that isn't helpful to anyone by mandating \n                                      that a transaction pay for each operation it performs (or causes a contract to perform).\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#connect-metamask-to-bsc"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        How to connect MetaMask to Betherance\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"connect-metamask-to-bsc",accordion:"bsc-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                      To direct the wallet toward Betherance nodes, you must open the "),t("b",[e._v("Settings")]),e._v(". \n                                      Find the "),t("b",[e._v("Networks")]),e._v(" menu on the Settings page. To manually add the Binance Smart Chain network, \n                                      click "),t("b",[e._v("Add Network")]),e._v(" in the top-right corner."),t("br"),e._v("\n                                      There are "+e._s(Object.keys(e.network.list).length)+" networks we can use here:\n                                      "+e._s(Object.keys(e.network.list).map(e=>"the "+e).join(" or "))+". Below are the parameters to fill in for each.\n                                      "),t("br"),t("br"),e._v(" "),e._l(e.network.list,(function(a,n){return t("div",{key:a+n},[t("b",[e._v(e._s(a.name))]),e._v(" "),t("ul",[t("li",[e._v("Network Name: "+e._s(a.name))]),e._v(" "),t("li",[e._v("New RPC URL: "+e._s(a.web3Provider))]),e._v(" "),t("li",[e._v("ChainID: "+e._s(a.id))]),e._v(" "),t("li",[e._v("Symbol: "+e._s(a.symbol))]),e._v(" "),t("li",[e._v("Block Explorer URL: "+e._s(a.explorerLink))])])])}))],2)])],1)],1)],1)])],1)])],1),e._v(" "),t("b-row",{staticClass:"disclaimer-container"},[t("b-col",{staticClass:"box-custom-info",attrs:{md:"12",lg:"12"}},[t("h3",{staticClass:"h3-box-custom-info"},[e._v("Disclaimer")]),e._v(" "),t("p",{staticClass:"p-box-custom-info"},[e._v("\n              Token Generator and its author disclaim all liability for Tokens created with this App and their subsequent use. \n              Tokens created with Token Generator, as well as their projects, teams, and use of Token \n              (as well as anything else linked to Token), are in no way associated with Token Generator or its inventor. \n              The code for Token Generator is released under the MIT License. Anyone can use it as they see fit. The App's \n              goal is to enable individuals to tokenize their ideas without having to code. The source code is \n              validated and thoroughly tested, and it is constantly updated to reduce the chance of problems and to \n              introduce language optimizations. In any case, purchasing tokens is fraught with danger. \n              It is important that you thoroughly examine all of your options before purchasing tokens.\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);