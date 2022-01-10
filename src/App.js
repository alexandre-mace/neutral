import './App.css';

function App() {
    return (
        <>
            <div className="container head-section">
                <div className="row">
                    <div className="col text-center">
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/compass_1f9ed.png" alt=""/>
                        <h1>Neutral</h1>
                        <div>La neutralité carbone du système énergétique pour les nuls</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <article>
                    <h2>Objectif : Sortir des énergies fossiles</h2>
                    <p>Scénarios de production et de consommation électriques permettant l’atteinte de la neutralité carbone à l’horizon 2050</p>
                </article>
                <article>
                    <h2>Préambule</h2>
                    <p>Le contenu de cet outil se base essentiellement sur le dernier rapport RTE. Ce derner est le fruit de : </p>
                    <ul>
                        <li>2 ans de travail</li>
                        <li>120 organisations</li>
                        <li>6 scénarios de production et 3 scénarios de consommation à l'étude</li>
                        <li>Le modèle simule le fonctionnement du système électrique à l’échelle européenne chaque heure de chaque année pendant 30 ans</li>
                    </ul>
                    <p>Le résumé exécutif est accessible ici : <a href="https://assets.rte-france.com/prod/public/2021-12/Futurs-Energetiques-2050-principaux-resultats.pdf">Lien du résumé</a></p>
                </article>
                <article>
                    <h2>État des lieux</h2>

                    <section>
                        <h3>Atteindre la neutralité carbone implique une transformation de l’économie et des modes de vie, et une restructuration du système permettant à l’électricité de remplacer les énergies fossiles comme principale énergie du pays</h3>
                        <h4>Pour respecter les engagements climatiques de la France, il faut sortir des énergies fossiles sur lesquelles notre économie et nos modes de vie sont aujourd’hui assis</h4>
                        <p>En France, environ 60 % de l’énergie utilisée est d’origine fossile : il s’agit principalement des produits pétroliers (de l’ordre de 40 %), du gaz naturel (de l’ordre de 20 %) et du charbon (moins de 1 %)</p>
                        <p className="info">ℹ️Cette énergie dépend des importations des pays producteurs (notamment l’Arabie saoudite, le Kazakhstan, la Russie, le Nigeria et l’Algérie pour le pétrole brut, la Norvège, la Russie, les Pays-Bas et le Nigeria pour le gaz).
                            Les combustibles fossiles satisfont aujourd’hui une consommation finale de plus de 930 TWh par an, contre 430 TWh pour l’électricité.
                            56 réacteurs nucléaires (construits sur la période 1970-1990) + base de production hydraulique déjà importante (60 TWh)
                        </p>
                        <p className="info">
                            ℹ️ Le programme électronucléaire français répondait à un souci d’autonomie énergétique à la suite des chocs pétroliers. Aujourd’hui, il n’est pas contestable qu’il constitue un atout majeur de la France dans la lutte contre le changement climatique en produisant une électricité très largement décarbonée en grandes quantités.
                        </p>
                        <p><b>Or, si le nucléaire représente bien 70 % de l’électricité produite en France, il représente moins de 20% de l’énergie finale utilisée par les français.</b></p>
                    </section>

                    <section>
                        <h3>Un impensé du débat français : la fermeture prévisible du parc nucléaire de seconde génération au cours des prochaines décennies</h3>
                        <p>Pour alimenter une consommation de 645 TWh d’électricité en 2050, la France dispose d’un atout : sa production d’électricité décarbonée avoisine déjà 500 TWh. Dès lors, la « marche » à franchir est beaucoup moins haute que dans d’autres pays</p>
                        <p className="info">ℹ️ (l’Allemagne produit aujourd’hui environ 300 TWh d’électricité bas-carbone, le Royaume-Uni près de 200 TWh, l’Italie près de 100 TWh, alors que tous ces pays européens envisagent des consommations d’électricité de l’ordre de 600-800 TWh dans trente ans).</p>
                        <p>Cependant, l’âge moyen du parc nucléaire est de 36 années, les centrales  atteignent progressivement l’échéance de 40 ans qui avait été retenue comme hypothèse de durée de fonctionnement lors de leur conception.</p>
                        <p className="info">
                            ℹ️ Si la durée d’exploitation de ces centrales est en train d’être prolongée dans le cadre des prescriptions édictées par l’Autorité de sûreté nucléaire et sous le contrôle de cette dernière, il est généralement admis que les réacteurs ne pourront probablement pas fonctionner plus de 60 ans, sauf exception et démarche de sûreté spécifique.
                        </p>
                        <p className="info">
                            ℹ️ Les arrêts définitifs seront très rapprochés (effet falaise), en raison de la rapidité exceptionnelle avec laquelle la France a bâti son parc dans les années 1980.
                        </p>
                        <p>
                            <b>
                                La nouvelle donne énergétique issue de ces dernières années : des objectifs climatiques plus contraignants pour 2030, un paysage de sécurité d’approvisionnement plus fragile avec la tension sur les approvisionnements en hydrocarbures, la montée des prix de l’énergie, et la réduction des marges sur le système électrique européen.
                            </b>
                        </p>
                        <p className="info">
                            ℹ️ À long terme (2050-2060), la fermeture des réacteurs nucléaires de deuxième génération est une contrainte industrielle : en plus de soutenir l’augmentation prévue de la consommation d’électricité, l’appareil de production français devra profondément se renouveler pour remplacer une production annuelle de l’ordre de 380-400 TWh.
                        </p>
                    </section>
                    <section>
                        <h3>Les options sur la table : un système électrique « renouvelable + nucléaire »ou « 100 % renouvelable » à terme</h3>
                        <p>
                            Du côté des renouvelables, les systèmes à forte part en énergies renouvelables constituent un objet de recherche dans de nombreux pays dans le monde, et RTE a publié en janvier 2021, conjointement avec l’Agence internationale de l’énergie, un rapport listant les prérequis techniques pour atteindre un système fondé sur une proportion importante de renouvelables, ouvrant donc la voie à la possibilité de systèmes 100 % renouvelables à terme. Ces scénarios s’accompagnent de paris importants, et notamment la maîtrise parfaite de l’intégration de l’« hydrogène ». Du côté du nucléaire, les options apparaissent également plus ouvertes : à côté des grands réacteurs de type EPR 2 se multiplient les projets de petits réac- teurs modulaires (SMR) et de nouvelles technolo- gies. La concertation sur les « Futurs énergétiques 2050 » a mis en lumière que la France n’était dans tous les cas pas en capacité, à la date actuelle, de construire des réacteurs nucléaires au même rythme que durant les années 1980.
                        </p>
                    </section>
                    <section>
                        <h3>Le système électrique de demain sera nécessairement différent de celui d’aujourd’hui</h3>
                        <p>Décrire ces mondes possibles en se fondant sur une étude technique approfondie, un chiffrage économique, une analyse environnementale et une prise en compte des aspects sociétaux : tel est l’objet des « Futurs énergétiques 2050 ».</p>
                    </section>
                </article>

                <article>
                    <h2>LES TRAJECTOIRES DE CONSOMMATION À L’HORIZON 2050</h2>
                </article>
                <article>
                    <h2>LES SCÉNARIOS DE MIX DE PRODUCTION À L’HORIZON 2050</h2>
                </article>
                <article>
                    <h2>Agir sur la consommation grâce à l’efficacité énergétique, voire la sobriété est indispensable pour atteindre les objectifs climatiques</h2>
                    <section>
                        <h3>La stratégie bas-carbone française repose déjà largement sur l’efficacité énergétique</h3>
                        <h4>La SNBC prévoit une diminution de 40 % de la consommation énergétique d’ici 2050</h4>
                        <ul>
                            <li>Réduction des consommations unitaires des équipements sous l’effet d’une progression technologique (progrès technique naturel des biens d’équipement de la maison, comme l’éclairage, l’électroménager ou l’informatique)</li>
                            <li>politiques publiques volontaristes (rénovation des bâtiments)</li>
                            <li>Ces deux seuls effets entraînent un effet baissier sur la consommation de 200 TWh.</li>
                            <li>Elle peut s’appuyer enfin sur l’électrification de certains usages, qui renforce mécaniquement l’efficacité énergétique (les voitures électriques ont des rendements de 90%, contre 25-35% pour les moteurs thermiques).</li>
                        </ul>
                    </section>
                    <section>
                        <h3>L’adoption de la sobriété énergétique permettrait de réduire encore davantage la consommation d’énergie mais constitue un projet de société en tant que tel                        </h3>
                        <ul>
                            <li>L’adoption de la sobriété énergétique permettrait de réduire encore davantage la consommation d’énergie mais constitue un projet de société en tant que tel</li>
                            <li>Les leviers de sobriété ont été identifiés et quantifiés par secteur d’activité (habitat, travail et commerce, déplacements et activités industrielles</li>
                            <li>Ils s’inspirent des travaux de la convention citoyenne sur le climat et dessinent un « pacte de société » spécifique, que les travaux de RTE ne visent pas à qualifier, promouvoir ou décourager, mais à documenter vis-à-vis de l’objectif de neutralité carbone</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>La consommation d’énergie va baisser mais celle d’électricité va augmenter pour se substituer aux énergies fossiles</h2>
                    <section>
                        <h3>La consommation d’électricité devrait être orientée à la hausse même en intégrant un fort développement de l’efficacité énergétique</h3>
                        <ul>
                            <li>
                                Aujourd’hui, l’électricité est omniprésente dans la vie des citoyens mais elle n’est pas dominante dans le mix énergétique français.
                            </li>
                            <li>
                                Son utilisation est marginale dans le secteur des transports (2 %, contre 91 % pour les énergies fossiles), minoritaire pour le chauffage des bâtiments (16 %, contre 56 % pour les énergies fossiles, avec 4 millions de ménages qui utilisent des chaudières au fioul), et plus proche de la parité dans l’industrie (36 %, contre 51 % pour les énergies fossiles 1) qui utilise toujours largement des hydrocarbures comme le pétrole, le gaz et le charbon, mais également de « l’hydrogène gris » extrait du gaz. Pour atteindre la neutralité carbone, il faut donc réduire les consommations et alimenter celles qui restent par des énergies bas-carbone, comme l’électricité ou les usages de la biomasse (bois-énergie, biométhane, biocarburants...)
                            </li>
                            <li>
                                Les nouveaux usages de l’électricité consistent le plus souvent en des substitutions aux énergies fossiles. Cet effet de transfert est particulièrement important là où l’électricité est aujourd’hui peu présente : dans les transports (100 TWh en 2050, contre 15 TWh aujourd’hui), dans l’industrie (180 TWh contre 115 TWh aujourd’hui) et dans la production d’hydrogène (50 TWh, contre 0 aujourd’hui). Et il n’est compensé que partiellement dans les secteurs résidentiel et tertiaire par la rénovation thermique et l’efficacité énergétique associée au renouvellement mécanique des équipements électriques (éclairage, électroménager...). Tous les scénarios neutres en carbone conduisent donc à une électrification importante des véhicules (94 % des véhicules légers et 21 % des camions en 2050) et des procédés industriels. Il ne s’agit pas pour autant d’une société « tout électrique » : des usages du gaz (biométhane, hydrogène, différents types de gaz de synthèse), des carburants liquides (biocarburants ou carburants de synthèse) et un recours au bois et à la biomasse (pour la chaleur) coexistent avec l’électricité.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Tous les scénarios, variantes et tests de sensibilité sont orientés dans le même sens </h3>
                        <ul>
                            <li>Toutes les variantes et scénarios concluent à une hausse de la consommation, allant de 15 % (sobriété) à 60% (réindustrialisation ou hydrogène +). </li>
                            <li>
                                Des combinaisons de variantes sont possibles, sans modifier ce résultat. Le système électrique français devra donc se mettre en situation de soutenir une augmentation de la demande électrique très probable dès lors que s’engagent les transformations nécessaires à la neutralité carbone, et ce même dans le cas où des gains importants sur l’efficacité énergétique et la sobriété sont au rendez-vous.
                            </li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Accélérer la réindustrialisation du pays, en électrifiant les procédés, augmente la consommation d’électricité mais réduit l’empreinte carbone de la France</h2>
                    <section>
                        <h3>Un scénario de reconquête industrielle appuyé sur une énergie bas-carbone présente un grand intérêt climatique</h3>
                        <ul>
                            <li>Depuis 30 ans, la France est parvenue à réduire les émissions de gaz à effet de serre produites sur son territoire et dans le même temps, son empreinte carbone (émissions générées sur le territoire et dans les autres pays du fait des produits importés) n’a diminué que de manière marginale : ce paradoxe s’explique par la désindustrialisation du pays et un recours croissant aux produits manufacturés importés, dans un contexte d’augmentation de la consommation française</li>
                            <li>Ce phénomène est contre-productif du point de vue climatique alors que la France bénéficie d’une électricité bas-carbone et affiche sur ce terrain l’une des meilleures performances au monde. La perspective d’un redéploiement industriel consistant en un investissement ciblé dans des industries de pointe et dans des activités permettant de réduire l’empreinte carbone du pays offre une solution pour résoudre cette difficulté : elle est étudiée dans le scénario de « réindustrialisation profonde » des « Futurs énergétiques 2050 »</li>
                            <li>
                                Ce scénario implique une reconstruction de l’appareil productif autour de solutions bas-carbone, dès le prochain cycle d’investissement. Il est tributaire de la compétitivité prix et carbone du système électrique français par rapport aux alternatives carbonées proposées hors de France et soulève à ce titre un enjeu considérable. Il conduirait à retrouver sur le temps long un niveau de l’industrie manufacturière dans le PIB voisin de celui du début des années 2000 et un solde commercial très positif.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Dans une économie réindustrialisée, la hausse de la consommation d’électricité sera plus forte que dans la trajectoire de référence</h3>
                        <p>Du fait de son solde commercial nettement importateur, les conséquences énergétiques et environnementales de la consommation française sont aujourd’hui en partie invisibles dans les bilans énergétique et climatique nationaux. Avec des relocalisations, ces conséquences seront perceptibles : RTE estime que, dans un scénario de réindustrialisation, la consommation d’électricité serait supérieure d’environ 100 TWh à la trajectoire de référence, et pourrait atteindre 750 TWh.</p>
                    </section>
                    <section>
                        <h3>Dans une économie réindustrialisée, l’empreinte carbone de la France diminue nettement</h3>
                        <p>
                            La réindustrialisation permet des gains très substantiels sur l’empreinte carbone de la France, qui constitue aujourd’hui l’un des principaux enjeux dans la lutte contre le changement climatique vu le solde déficitaire de la balance commerciale du pays. Une réindustrialisation profonde permet d’éviter environ 900 millions de tonnes de CO2 en trente ans, avec un avantage qui s’amplifie tout au long de la trajectoire : ~10 MtCO2eq/an entre 2020 et 2030, ~30 MtCO2eq/an entre 2030 et 2040, ~40 MtCO2eq/an entre 2040 et 2050. La France peut en effet tirer parti d’un mix actuel plus décarboné et de l’atteinte d’objectifs climatiques plus ambitieux que ceux de la majorité des pays dont la France importe les biens manufacturé
                        </p>
                    </section>
                </article>
                <article>
                    <h2>Atteindre la neutralité carbone est impossible sans un développement significatif des énergies renouvelables</h2>
                    <section>
                        <h3>Maintenir durablement un grand parc nucléaire permet de décarboner massivement mais est loin de suffire à atteindre la neutralité carbone</h3>
                        <ul>
                            <li>quelles que soient les préférences politiques, la durée de vie des réacteurs de seconde génération ne pourra être prolongée indéfiniment : les centrales actuelles, construites pour la majorité dans les années 1980, devront fermer d’ici 2060, avec un «effet falaise » très marqué durant la décennie 2040</li>
                            <li>les nouveaux réacteurs (de troisième génération), dont la construction serait décidée aujourd’hui, entreraient en service à compter de 2035 au mieux, au rythme d’une paire tous les quatre ans</li>
                            <li>Cette perspective représente un défi industriel de premier plan. Disposer d’un parcde 50 GW en 2050 implique de prolonger l’essentiel des réacteurs actuels jusqu’à 60 ans, d’être en mesure d’exploiter certains d’entre eux au-delà de cette durée en respectant les prescriptions de sûreté qui seront imposées par l’ASN, de mettre en service 14 nouveaux réacteurs de type EPR 2 entre 2035 et 2050 dont de très nombreux entre 2040 et 2050, et d’installer en complément une capacité significative de petits réacteurs nucléaires (SMR).</li>
                            <li>Un parc nucléaire de 50 GW est susceptible de produire de l’ordre de 325 TWh en 2050. Un tel volume équivaut, dans la trajectoire de consommation de référence, à environ 50% de la production nationale.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Développer significativement les énergies renouvelables en France est, dans tous les cas, absolument indispensable pour atteindre la neutralité carbone</h3>
                        <ul>
                            <li>Même un parc nucléaire constitué de réacteurs prolongés et d’un nombre important de nouveaux réacteurs ne peut suffire à assurer l’alimentation d’une consommation de 645 TWh d’ici 30 ans, et a fortiori d’une consommation de 750 TWh. L’étude conclut, sans aucune ambiguïté, au caractère indispensable d’un développement soutenu des énergies renouvelables électriques en France pour respecter ses engagements climatiques.</li>
                            <li className={"info"}>ℹ️ À titre de comparaison, le parc actuel complété du réacteur EPR de Flamanville représentera une puissance installée de 63 GW</li>
                            <li>Pour y arriver, il est nécessaire de les développer partout où c’est possible : solaire, éolien terrestre ou maritime, sans oublier l’hydraulique dont le potentiel de croissance doit être utilisé là où cela est encore possible dans le respect des normes environnementales.</li>
                            <li>Tous les scénarios européens prévoient un fort développement du solaire photovoltaïque et ceux envisageables pour la France n’y font pas exception : d’ici 30 ans, il faudra avoir porté le parc au minimum à 70 GW (plus de 200 GW dans la trajectoire la plus haute). Ces chiffres ne sont pas exceptionnels par rapport aux prévisions des pays voisins même s’ils représentent une croissance relative impressionnante au regard de la taille limitée du parc actuel (10 GW, contre 13 au Royaume-Uni, 14 en Espagne, 21 en Italie et 54 en Allemagne).</li>
                            <li><b>Respecter les objectifs climatiques passe aussi nécessairement par un développement de l’éolien</b>, qui constitue aujourd’hui une technologie mature aux coûts de production faibles, susceptible de produire des volumes d’électricité importants. S’il sera possible de « doser » entre l’éolien terrestre et l’éolien en mer en fonction des opportunités économiques et des problématiques d’acceptabilité, un parc minimal d’une quarantaine de gigawatts d’éolien terrestre, ainsi que la construction d’un parc d’éoliennes en mer de l’ordre de 25 GW, apparaissent nécessaires. Atteindre ces niveaux ne soulève pas d’enjeu économique ou technique (sauf sur l’éolien en mer flottant), mais bien une question d’acceptabilité même si celle-ci doit être mise en regard de comparatifs européens : l’Allemagne s’est déjà dotée d’une capacité de production éolienne terrestre de 50 GW en 15 ans, le Danemark atteint 4,5 GW pour un pays d’une surface représentant moins de 8% de celle de la France métropolitaine, et le Royaume-Uni – qui a développé en 20 années un parc de 10 GW d’éoliennes en mer – atteindra 20 GW d’ici 2030.</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>
                        Se passer de nouveaux réacteurs nucléaires implique des rythmes de développement des énergies renouvelables plus rapides que ceux des pays européens les plus dynamiques
                    </h2>
                    <section>
                        <h3>Les scénarios « 100 % renouvelable » nécessitent une forte acceptabilité des parcs d’énergies renouvelables et une inflexion très importante des rythmes de développement</h3>
                        <ul>
                            <li>Le scénario M0, visant une sortie du nucléaire en 2050, représente un défi industriel majeur dans la mesure où les rythmes de développement des énergies renouvelables dépassent largement les performances cumulées de l’Allemagne sur les renouvelables terrestres et du Royaume-Uni sur l’éolien en mer au cours des dernières années.</li>
                            <li>Même un scénario de relance du nucléaire avec un programme minimal de six réacteurs implique d’atteindre des rythmes de déploiement des renouvelables particulièrement élevés.</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>
                        Construire de nouveaux réacteurs nucléaires est pertinent du
                        point de vue économique, a fortiori quand cela permet de conserver un
                        parc d’une quarantaine de GW en 2050 (nucléaire existant et nouveau
                        nucléaire)
                    </h2>
                    <section>
                        <h3>Il existe un espace économique pour construire de nouveaux réacteurs</h3>
                        <ul>
                            <li>L’étude conclut avec un bon niveau de confiance que les scénarios comprenant un parc nucléaire de 40 GW au moins (N2 et N03) peuvent conduire, à long terme, à des coûts plus bas pour la collectivité qu’un scénario 100% renouvelable reposant sur de grands parcs.</li>
                            <li>ℹ️ Ceci est vrai même si les coûts « bruts » de production des nouvelles centrales nucléaires sont en moyenne plus élevés que ceux associés aux grands parcs d’énergies renouvelables.</li>
                            <li>En effet, l’intégration de volumes importants d’éoliennes ou de panneaux solaires engendre de très importants besoins en flexibilités (stockage, pilotage de la demande et nouvelles centrales d’appoint) pour pallier leur variabilité, ainsi que des renforcements des réseaux (raccordement, transport et distribution). Une fois ces coûts intégrés, les scénarios comprenant de nouveaux réacteurs nucléaires apparaissent plus compétitifs.</li>
                            <li>ℹ️ Cet avantage serait nettement réduit, mais toujours existant, dans le cas où le coût des nouveaux réacteurs nucléaires ne diminuerait pas et demeurerait voisin de celui de l’EPR de Flamanville.</li>
                            <li>Les scénarios M (« 100 % renouvelables ») apparaissent d’autant plus onéreux par rapport aux scénarios N que la sortie du nucléaire se fait rapidement (2050 dans le scénario M0) ou n’est pas fondée très majoritairement sur de très grands parcs éoliens ou solaires (scénario M1, qui comprend davantage de petites installations solaires).</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Leur intérêt économique est conditionné à l’accès à des possibilités de financement qui ne s’écartent pas de celles des autres technologies bas-carbone</h3>
                        <ul>
                            <li>Des conditions de financement défavorables résultant par exemple d’une absence de soutien public ou un accès plus difficile à des financements européens seraient de nature à augmenter le coût complet de la production nucléaire</li>
                            <li>ℹ️ Dans le cas où cette différence porterait sur trois pourcents de coût du capital, le coût d’un scénario comprenant de nouveaux réacteurs serait équivalent à celui duscénario «100 % renouvelables» présentant le meilleur bilan économique, c’est-à-dire celui fondé sur de grands parcs (M23).</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Les énergies renouvelables électriques sont devenues des solutions compétitives. Cela est d’autant plus marqué dans le cas de grands parcs solaires et éoliens à terre et en mer</h2>
                    <section>
                        <h3>Les coûts d’un scénario 100% renouvelable reposant sur de grands parcs peuvent s’approcher de ceux comprenant des nouveaux réacteurs sous réserve de s’appuyer sur un « système hydrogène » performant et flexible et de réussir le pari de l’éolien flottant.</h3>
                        <ul>
                            <li>Les grands parcs éoliens et photovoltaïques ont fortement gagné en maturité technologique : leurs coûts atteignent aujourd’hui des niveaux très compétitifs, désormais inférieurs à ceux de nouvelles centrales thermiques et nucléaires.</li>
                            <li>ℹ️ A long terme, les coûts d’un système reposant à 100% sur les énergies renouvelables peuvent s’approcher de ceux d’un système comprenant de nouveaux réacteurs nucléaires sous plusieurs conditions : </li>
                            <ul>
                                <li>(i) miser sur les technologies les plus matures etle développement de grands parcs pour bénéficier d’économies d’échelle</li>
                                <li>(ii) réussir le pari de l’éolien en mer flottant, en obtenant une décroissance des coûts similaires à celle observée ces dernières années sur l’éolien posé</li>
                                <li>(iii) obtenir des coûts de financement favorables pour les énergies renouvelables, avec a minima une poursuite du soutien public au travers des dispositifs de tarif d’achat et de complément de rémunération</li>
                                <li>(iv) contenir le coût des flexibilités et notamment du système permettant de compenser la variabilité de l’éolien : « système hydrogène » (stockage et réseau) compétitif et mutualisé, recours possible et ponctuel au biométhane si celui-ci est suffisamment développé, etc.</li>
                            </ul>
                        </ul>
                    </section>
                    <section>
                        <h3>Le développement de grands parcs d’énergies renouvelables présente un avantage économique lorsque qu’il ne conduit pas à un développement important des flexibilités</h3>
                        <p>Le développement d’une part d’énergies renouvelables plus importante qu’aujourd’hui n’est donc pas uniquement une nécessité industrielle et climatique : elle est également pertinente sur le plan économique.</p>
                    </section>
                    <section>
                        Les scénarios de sortie du nucléaire dès 2050 (M0) ou fondés majoritairement sur le solaire diffus (M1) sont significativement plus onéreux que les autres options
                    </section>
                </article>
                <article>
                    <h2>Les moyens de pilotage dont le système a besoin pour garantir la sécurité d’approvisionnement sont très différents selon les scénarios.</h2>
                    <p>Il y a un intérêt économique à accroître le pilotage de la consommation, à développer des interconnexions et du stockage hydraulique, ainsi qu’à installer des batteries pour accompagner le solaire. Au-delà, le besoin de construire de nouvelles centrales thermiques assises sur des stocks
                        de gaz décarbonés (dont l’hydrogène) est important si la relance du nucléaire est minimale et il devient massif – donc coûteux - si l’on tend vers 100% renouvelables</p>
                    <section>
                        <h3>Quelle que soit la décision sur la relance d’un programme nucléaire, le système électrique de l’avenir reposera en grande partie sur les énergies renouvelables variables. </h3>
                        <p>Il devra gérer des cycles réguliers jours/nuits (pour le solaire) mais également des variations de production éolienne très importantes à l’échelle d’une semaine, d’un mois, voire d’une année. Il s’agit d’un défi technique majeur.</p>
                    </section>
                    <section>
                        <p>Il devra gérer des cycles réguliers jours/nuits (pour le solaire) mais également des variations de production éolienne très importantes à l’échelle d’une semaine, d’un mois, voire d’une année. Il s’agit d’un défi technique majeur.</p>
                    </section>
                    <section>
                        <h3>Renforcer les interconnexions entre la France et ses voisins représente un fort levier d’économie qui implique un degré d’interdépendance entre partenaires européens</h3>
                        <p><b>Dans le même temps, la dépendance de la France envers les pays producteurs de pétrole et de gaz fossile disparaîtrait totalement : les scénarios de neutralité carbone sont bien des scénarios de très fort renforcement de la souveraineté énergétique.</b></p>
                    </section>
                    <section>
                        <h3>La construction de nouvelles centrales thermiques appuyées sur des stockages de longue durée en « gaz décarbonés » est une nécessité dans les scénarios sans relance forte du nucléaire</h3>
                        <ul>
                            <li>Un développement poussé des énergies renouvelables comme l’éolien ou le solaire n’est pas concevable sans que des moyens de production pilotables n’existent en complément. Le système doit notamment pouvoir absorber des périodes de plusieurs semaines consécutives sans vent en déstockant de l’énergie, ce que des batteries ou une gestion intelligente de la demande ne permettront pas de réaliser. Pour remplir ce besoin, les stocks hydrauliques seront insuffisants et il n’existe pas d’autre moyen d’y faire face que les centrales nucléaires ou les centrales thermiques utilisant des stocks de gaz décarbonés.</li>
                            <li>Mais ces centrales fonctionneront peu : elles sont là pour pallier des absences d’autres productions, en « backup »</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Le stockage hydraulique, le pilotage de la demande et les batteries constituent des solutions pertinentes pour gérer des fluctuations à l’échelle de la journée voire de la semaine</h3>
                        <ul>
                            <li>Le développement du stockage hydraulique (STEP) ou de la gestion intelligente de la demande (dans les bâtiments et dans les transports via la recharge intelligente des véhicules électriques) constituent deux solutions « sans regret » sur le plan technique et économique : elles sont rentables dans toutes les situations. Les enjeux associés sont donc d’un autre ordre (incidence environnementale pour l’hydraulique, acceptation politique ou sociétale pour la gestion de la demande)</li>
                            <li>Tirer le meilleur parti du potentiel de flexibilité voire de stockage que représentent les véhicules électriques présente un intérêt. Celui-ci porte en premier lieu sur la recharge intelligente des véhicules (au cours de la journée au moment où la production solaire est forte, le week-end ou les nuits par des dispositifs automatiques lorsque les véhicules ne sont pas utilisés) : l’intérêt pour le consommateur et le système est fort et accessible sans surcoût. Mobiliser, au-delà, les batteries comme des stockages (vehicule-to-grid) constitue une option supplémentaire, mais n’est pas une obligation dans la majorité des configurations étudiées.</li>
                            <li>Le stockage par grandes batteries dédiées au système électrique constitue pour sa part une solution très adaptée dans les scénarios où le solaire se développe très largement. Il n’est toutefois pas indispensable dans tous les scénarios.</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Dans tous les scénarios, les réseaux électriques doivent être rapidement redimensionnés pour rendre possible la transition énergétique</h2>
                    <section>
                        <h3>Les réseaux sont au cœur de la transition énergétique</h3>
                        <p><b>Ces réseaux vont devoir accélérer leur transformation de manière à rendre possible la transition énergétique</b></p>
                    </section>
                    <section>
                        <h3>Le réseau de transport : des évolutions structurelles dès 2030, et beaucoup plus importantes dans les scénarios 100 % renouvelable</h3>
                    </section>
                    <section>
                        <h3>Le réseau de distribution : des adaptations d’un montant significatif pouvant aller du simple au double selon les scénarios pour satisfaire la hausse de la consommation et connecter les nouvelles installations de production</h3>
                        <p>ℹ️ Le réseau de distribution : des adaptations d’un montant significatif pouvant aller du simple au double selon les scénarios pour satisfaire la hausse de la consommation et connecter les nouvelles installations de production</p>
                    </section>
                </article>
                <article>
                    <h2>Créer un « système hydrogène bas-carbone » performant est un atout pour décarboner certains secteurs difficiles à électrifier, et une nécessité dans les scénarios à très fort développement en renouvelables pour stocker l’énergie</h2>
                    <p>L’intérêt pour l’hydrogène bas-carbone dans le débat énergétique est récent mais intense. La promesse d’une « révolution de l’hydrogène » peut en effet apparaître comme une solution séduisante (vecteur combinant flexibilité, faculté à être produit en masse à base d’électricité bas-carbone et pouvant remplacer le gaz d’origine fossile dans de nombreux usages). Il existe néanmoins encore de nombreuses incertitudes sur l’économie de l’hydrogène. Il en résulte une confusion récurrente entre le rôle de l’hydrogène comme solution de décarbonation de l’énergie et celui de solution intermédiaire de stockage pour les besoins de production d’électricité</p>
                    <section>
                        <h3>Un levier prioritaire : décarboner les usages actuels de l’hydrogène et en développer de nouveaux dans l’industrie ou le transport de marchandises</h3>
                        <ul>
                            <li>L’hydrogène constitue en premier lieu un moyen de décarboner des secteurs difficiles voire impossibles à électrifier sur le plan technique ou économique.
                                ℹ️ À ce titre, l’action prioritaire à engager consiste à remplacer l’hydrogène fossile (issu à 95 % du gaz, pétrole et charbon) actuellement utilisé par l’industrie dans ses process en France (dans le secteur du raffinage, de la production d’ammoniac ou de la chimie) par de l’hydrogène bas-carbone.</li>
                            <li>L’hydrogène bas-carbone a également vocation à se développer dans le secteur de la mobilité lourde, en particulier pour le transport routier de longue distance.</li>
                            <li>Le « socle » d’hydrogène bas-carbone nécessaire pour décarboner ces usages est estimé à 35 TWhH2. Produire ces quantités nécessite de développer des électrolyseurs, dans un premier temps sous la forme de grandes installations soutirant depuis le réseau électrique une électricité bas-carbone et situés à proximité des zones industrielles ou des zones d’avitaillement. La consommation électrique associée, dans la trajectoire de référence, atteint environ 50 TWhe.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Un levier à long terme : développer le stockage d’hydrogène flexible dans la perspective de scénarios à hautes proportions en énergies renouvelables</h3>
                        <p>Si les électrolyseurs sont reliés à un grand système hydrogène doté de capacités de stockage, ils pourront alors moduler leur fonctionnement dans des proportions plus importantes que beaucoup d’autres usages électriques : contrairement aux véhicules électriques dont les batteries restent de capacité limitée et doivent être rechargées régulièrement, les électrolyseurs pourraient stopper leur fonctionnement pendant de longues périodes (par exemple durant les semaines sans vent) dès lors qu’un stock suffisant a été constitué pour alimenter les besoins d’hydrogène. Cette flexibilité n’est toutefois accessible que grâce à des infrastructures de stockage et de transport d’hydrogène dont la disponibilité n’est aujourd’hui pas acquise. Le coût de ces solutions, aujourd’hui soumis à une forte incertitude, est intégré aux chiffrages</p>
                    </section>
                </article>
                <article>
                    <h2>Les scénarios à très hautes parts d’énergies renouvelables, ou celui nécessitant la prolongation des réacteurs nucléaires existants au-delà de 60 ans, impliquent des paris technologiques lourds pour être au rendez-vous de la neutralité carbone en 2050</h2>
                    <p>ℹ️ Atteindre un système neutre en carbone en 2050 représente un défi technologique. De nombreuses innovations sont attendues et peuvent se révéler plus ou moins nécessaires selon les scénarios : véhicules électriques utilisant des batteries moins gourmandes en métaux rares, boucle «power-to-gas-to-power» via l’hydrogène ou le méthane de synthèse, centrales thermiques fonctionnant aux gaz décarbonés, technologies numériques pour la gestion de la demande, petits réacteurs nucléaires modulaires (SMR), nouvelles énergies marines comme les hydroliennes, etc.</p>
                    <section>
                        <h3>Les prérequis technologiques associés aux scénarios à forte proportion en renouvelables ont été explicités dans le rapport commun publié par RTE et l’Agence internationale de l’énergie (janvier 2021)</h3>
                        <h4>Ces quatre conditions sont les suivantes</h4>
                        <ul>
                            <li>(1) l’arrivée à maturité de solutions technologiques permettant de maintenir la stabilité du système électrique sans production conventionnelle</li>
                            <li>(2) le déploiement à grande échelle des flexibilités</li>
                            <li>(3) la maîtrise des enjeux de développement des réserves techniques</li>
                            <li>(4) une mise à niveau des réseaux électriques nationaux.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Le maintien d’une base nucléaire d’une cinquantaine de gigawatts présente également des défis de nature technologique</h3>
                        <ul>
                            <li>Cinq des six scénarios des « Futurs énergétiques 2050 » reposent sur une exploitation de certains des réacteurs actuels au-delà de 50 ans, selon des pré - requis de sûreté qui devront au préalable être systématiquement vérifiés. L’Autorité de sûreté nucléaire a indiqué que la prolongation au-delà de 40 ans, pour laquelle elle a rendu un avis générique favorable, nécessite déjà un « volume exceptionnel de travaux ». </li>
                            <li>
                                Trois des six scénarios prévoient la construction de nouveaux réacteurs de type EPR 2, ce qui constitue un défi industriel. Le scénario N03 nécessite d’aller plus loin et de remplir quatre conditions
                                <ul>
                                    <li>(1) réussir la prolongation de l’essentiel des réacteurs jusqu’à 60 ans</li>
                                    <li>(2) en prolonger certains au-delà de 60 ans (d’autant plus si certains ferment à 50 ans)</li>
                                    <li>(3) construire et mettre en service 14 réacteurs de type EPR 2 (soit 8 de plus que dans le programme « Nouveau nucléaire France »)</li>
                                    <li>(4) déployer une capacité de 4 GW de SMR. Un tel scénario impliquerait de s’assurer suffisamment tôt de la faisabilité d’un fonctionnement au-delà de 60 ans. Il nécessite de manière générale un effort de R&D global sur la filière nucléaire, depuis la conception des nouveaux réacteurs jusqu’aux technologies permettant de « fermer le cycle »</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Un scénario conservant une capacité de production nucléaire importante associé à un développement conséquent des renouvelables est de nature à limiter le risque de non-atteinte des objectifs climatiques</h3>
                        <ul>
                            <li>Les scénarios de type N2 permettent de s’affranchir de plusieurs paris techniques et industriels pour atteindre un haut niveau de production d’électricité bas-carbone</li>
                            <li>En effet, la dépendance au système hydrogène y est plus faible, les aménagements du réseau s’inscrivent dans le prolongement de l’accélération déjà envisagée pour 2035 et les enjeux de maintien du synchronisme sont moins importants. Sur le volet nucléaire, ce type de scénario n’est pas tributaire de la prolongation des réacteurs au-delà de 60 ans et sa trajectoire est compatible avec un lissage de la fermeture des réacteurs actuels dans le but d’éviter «l’effet falaise». Le développement d’une filière de petits réacteurs modulaires – lesquels ne sont pas encore développés en France sur le plan industriel – devient une opportunité (pour réduire le rythme nécessaire de construction des EPR2) et non une obligation. Le défi industriel que constituerait la construction de 14 réacteurs EPR 2 en 30 ans ne doit toutefois pas être sous-estimé.</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>La transformation du système électrique doit intégrer dès à présent les conséquences probables du changement climatique, notamment sur les ressources en eau, les vagues de chaleur ou les régimes de vent</h2>
                    <section>
                        <h3>Le changement climatique modifie les profils de consommation et de production : ses conséquences doivent être intégrées dans le dimensionnement et l’adaptation du système électrique</h3>
                        <ul>
                            <li>
                                ℹ️  S’agissant de la gestion du système électrique, les conséquences les plus visibles du changement climatique affectent en premier lieu la température : selon le rapport DRIAS 2020 de Météo-France, la hausse moyenne des températures en France pourrait atteindre entre +0,8° C et +2,9° C sur la période 2041-2070, par rapport à 1976-2005. L’intensité et la fréquence des vagues de froid vont diminuer (sans pour autant faire disparaître le risque) tandis que celles des canicules se renforcent : en 2050, un été sur trois pourrait être marqué par une canicule comparable à celle de 2003. Ces effets sur la température se traduisent par une hausse de la consommation d’électricité pour la climatisation, largement compensée, sur l’année, par la baisse de consommation sur le chauffage.
                            </li>
                            <li>Il faudra gérer différemment le stock hydraulique, car le remplissage des barrages lié à la fonte des neiges sera plus précoce dans l’année et les sécheresses tardives seront plus fréquentes au début de l’automne</li>
                            <li>La sensibilité des nouveaux réacteurs nucléaires à ces aléas climatiques pourra être minimisée en privilégiant certains sites (en bord de mer ou en bord de fleuves faiblement contraints en matière de débits et de température seuil) et grâce aux aéroréfrigérants imposés pour les futures centrales en bord de fleuve</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Du fait de l’évolution du mix, l’équilibre du système sera plus sensible aux conditions de vent et non plus essentiellement à la température</h3>
                        <ul>
                            <li>Ces périodes froides et sans vent, qui suscitent beaucoup de questions dans le débat public sur le mix électrique, induisent ainsi des besoins de capacités pilotables très significatifs dans les scénarios à haute part en énergies renouvelables (plusieurs dizaines de gigawatts). Seules de telles capacités permettront de passer ce type de situations</li>
                            <li>L’augmentation des situations de sécheresse à la fin de l’été et à l’automne pourra également conduire à des périodes de tension pour l’équilibre offre-demande d’électricité, d’autant plus si ces sécheresses se combinent avec des périodes de faible vent. Là aussi, des capacités pilotables sont nécessaires. Elles sont intégrées dans l’analyse des scénarios</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Le développement des énergies renouvelables soulève un enjeu d’occupation de l’espace et de limitation des usages. Il peut s’intensifier sans exercer de pression excessive sur l’artificialisation des sols, mais doit se poursuivre dans chaque territoire en s’attachant à la préservation du cadre de vie</h2>
                    <section>
                        <h3>
                            L’acceptation de l’éolien et du solaire est une problématique d’intégration dans le cadre de vie avant d’être environnementale
                        </h3>
                        <ul>
                            <li>Le système électrique français s’est construit autour de centrales nucléaires, de grands barrages hydrauliques, et de quelques centrales thermiques. La production y est très concentrée autour de quelques points du territoire où les infrastructures sont généralement bien acceptées car pourvoyeuses d’emploi et de fiscalité locale</li>
                            <li>En parallèle, le « système fossile », qui alimente plus de 60 % de l’énergie consommée par les français, est peu visible : les champs de pétrole et de gaz ne se situent pas en France, les infrastructures de raffinage sont peu nombreuses et concentrées dans des zones portuaires généralement très industrialisées et le réseau de gazoducs est souterrain...</li>
                            <li>La partie la plus visible du système énergétique français est donc constituée du réseau à haute et très haute tension électrique.</li>
                            <li>Les énergies renouvelables amenées à se développer pour atteindre la neutralité carbone se déploient de manière diffuse sur le territoire. Elles conduisent à rendre visible un système de production d’énergie qui était jusqu’alors largement invisible, car situé à l’étranger ou extrêmement concentré. Cette problématique du « surgissement » des infrastructures alimente une grande partie de la controverse sur les éoliennes ou les grands parcs solaires et du débat sur leur acceptabilité par la population française.</li>
                            <li>Cette problématique est donc, en premier lieu, de nature esthétique ou patrimoniale</li>
                            <li>Les analyses des « Futurs énergétiques 2050 » confirment une plus grande visibilité des infrastructures : les éoliennes pourraient représenter entre 14 000 et 35 000 mâts, et les panneaux solaires entre 0,1 % et 0,3 % du territoire</li>
                            <li>Les scénarios avec construction de nouveaux réacteurs nucléaires conduisent à une moindre occupation de l’espace puisque les nouveaux réacteurs seraient a priori construits sur ou contiguë aux sites existants. <b>Ces constats de moindre occupation spatiale par le nucléaire ne doivent toutefois pas occulter les débats d’acceptabilité que ces nouvelles installations ne manqueront pas de provoquer, doublés d’une mise en avant du risque d’accident</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Les énergies renouvelables ne conduisent pas, de manière générale, à une forte imperméabilisation et artificialisation des surfaces</h3>
                        <p>Plus le scénario comporte d’énergies renouvelables, plus la surface du territoire utilisée par des infrastructures énergétiques augmente. Néanmoins, les surfaces imperméabilisées et artificialisées, qui cristallisent les inquiétudes pour la biodiversité, restent très faibles à l’échelle du territoire. À l’horizon 2050, les surfaces artificialisées dédiées au système électrique représenteront de l’ordre de 20 000 à 30 000 hectares contre plus d’un million pour le seul réseau routier français. Le flux d’artificialisation est plus important dans les scénarios M, mais les surfaces en question sont faibles par rapport au flux correspondant à l’habitat, aux zones commerciales ou aux routes (1 à 3 %). Toute action permettant de limiter l’artificialisation liées aux infrastructures électriques (réutilisation de friches délaissées) contribuera à l’atteinte de l’objectif de « zéro artificialisation nette »</p>
                    </section>
                    <section>
                        <h3>Les surfaces sur lesquelles sont implantées les énergies renouvelables sont globalement accessibles aux co-usages, sous conditions dans le cas du photovoltaïque</h3>
                        <ul>
                            <li>Les possibilités de « co-usages des sols » autour des installations électriques sont de natures différentes selon les filières. Elles sont de faible intensité mais sur une surface étendue pour l’éolien, car de nombreux usages, notamment agricoles, sont possibles autour des éoliennes. C’est l’inverse pour le solaire : l’espace occupé est plus réduit rapporté à la puissance installée, mais la contrainte sur les co-usages est beaucoup plus forte. Les possibilités d’usages de l’espace sous les panneaux au sol peuvent être nettement réduits, même si le sol n’est ni artificialisé ni imperméabilisé, sauf dans des modèles spécifiques d’agrivoltaïsme (pâturage et certaines cultures possibles)</li>
                            <li>L’étude n’identifie enfin aucun problème structurel sur le foncier même si des tensions sont susceptibles de survenir dans certaines régions.</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Même en intégrant le bilan carbone complet des infrastructures sur l’ensemble de leur cycle de vie, l’électricité en France restera très largement décarbonée et contribuera fortement à l’atteinte de la neutralité carbone en se substituant aux énergies fossiles</h2>
                    <section>
                        <h3>Le bilan carbone des énergies renouvelables et du nucléaire est très bon, même en intégrant leur cycle de vie</h3>
                        <ul>
                            <li>L’intégration du cycle de vie des matériels au bilan carbone repose aujourd’hui sur une méthode normée et maîtrisée : même en intégrant l’ensemble du cycle de vie, les émissions totales des technologies de production d’électricité renouvelable ou nucléaire sont très faibles, d’un niveau bien inférieur à celles associées à l’utilisation d’énergies fossiles.</li>
                            <li>Le bilan carbone pourrait être encore amélioré dans le cas d’une relocalisation de la phase de production des panneaux, notamment dans la perspective d’un «saut technologique» sur le type de panneaux.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Le bilan carbone pourrait être encore amélioré dans le cas d’une relocalisation de la phase de production des panneaux, notamment dans la perspective d’un «saut technologique» sur le type de panneaux.</h3>
                        <ul>
                            <li>
                                La forte performance du parc français actuel sous l’angle des émissions est une réalité indéniable. L’Allemagne émet ainsi sept fois plus pour produire son électricité malgré un fort développement des renouvelables au cours des dernières années pour sortir du nucléaire, le Royaume-Uni émet deux fois plus et l’Italie presque trois fois plus.
                            </li>
                            <li>Ce point de départ favorable conduit parfois à ce que le bénéfice climatique du développement de l’éolien et du solaire en France soit nié. Or poursuivre le développement de l’éolien et du solaire conduit bien à réduire les émissions si ces capacités s’ajoutent aux centrales nucléaires existantes :
                                <ul>
                                    <li>1) la production bas-carbone doit augmenter pour alimenter les besoins qui résultent du report des consommations utilisant aujourd’hui les énergies fossiles</li>
                                    <li>2) pour augmenter ce potentiel par rapport à aujourd’hui, il n’existe pas d’alternative à court terme au développement des renouvelables (les nouveaux réacteurs que la France pourrait décider de construire, ne produiront de l’électricité qu’en 2035 au mieux)</li>
                                    <li>3) il est nécessaire de développer de manière anticipée la production bas-carbone pour préparer l’arrêt à terme des réacteurs actuels et pouvoir ainsi conserver la performance actuelle sur le temps long</li>
                                </ul>
                            </li>
                            <li>
                                Dans les scénarios où la fermeture des réacteurs nucléaires n’est pas compensée par de nouveaux, le maintien de la performance climatique nécessite un strict respect des rythmes de développement des renouvelables et implique un remplacement du gaz fossile utilisé dans les centrales thermiques par du gaz vert dès la décennie 2030-2040. Si ces conditions ne sont pas respectées, les émissions de gaz à effet de serre du système électrique augmenteront et rendront la neutralité carbone hors d’atteinte
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>L’électrification des usages permet à elle seule de réduire les émissions de la France de 35% d’ici 2050</h3>
                        <ul>
                            <li>
                                Les actions ayant le meilleur impact climatique consistent à remplacer les produits pétroliers (essence et gasoil) par de l’électricité (ou par de l’hydrogène lui-même produit à partir d’électricité) dans les véhicules particuliers et les poids lourds, et à remplacer le fioul et le gaz fossile pour le chauffage dans le cadre de la rénovation des bâtiments. Dans l’industrie, le développement de l’électricité ou de l’hydrogène bas-carbone dans certains procédés ou encore le recours aux chaudières électriques permet également de réduire les émissions.
                            </li>
                            <li>
                                Dans l’ensemble, l’électrification des usages permet de gagner environ 150 millions de tonnes de CO2 d’ici 2050. Le rôle de l’électricité est donc majeur mais pas suffisant : le mix énergétique en 2050 est loin d’être tout électrique et l’atteinte de la neutralité carbone repose également sur d’autres leviers, comme le développement des bioénergies ou la réduction des émissions de l’agriculture
                            </li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>
                        L’économie de la transition énergétique peut générer des tensions sur l’approvisionnement en ressources minérales, particulièrement pour certains métaux, qu’il sera nécessaire d’anticiper
                    </h2>
                    <section>
                        <h3>La transition énergétique réduit la dépendance liée aux énergies fossiles mais induit des besoins et circuits d’approvisionnement nouveaux en ressources minérales</h3>
                        <ul>
                            <li>Le débat sur l’approvisionnement énergétique au XXe siècle a été marqué par des interrogations récurrentes sur la taille des réserves de gaz et de pétrole, l’horizon du pic pétrolier ou encore sur les problèmes de dépendance énergétique aux pays producteurs</li>
                            <li>La transition énergétique du XXIe siècle déplace ces questions d’approvisionnement en ressources : le système énergétique sort de sa dépendance aux énergies fossiles mais nécessite des quantités importantes de ressources minérales qui suscitent leurs propres enjeux d’approvisionnement et de dépendance. Cette situation doit cependant être analysée avec rigueur en dépassant les postures caricaturales</li>
                            <li><b>Les différents scénarios ne conduisent pas à identifier un enjeu majeur sur les terres rares.</b></li>
                            <li>Souvent évoquées dans le débat sur les impacts des énergies renouvelables, celles-ci sont en pratique très peu présentes dans les composants du système électrique (seulement dans certaines technologies d’éoliennes en mer), mais beaucoup plus dans d’autres secteurs comme le numérique, l’électroménager ou encore les voitures thermiques. Elles ne présentent pas de rareté du point de vue géologique</li>
                            <li>En revanche, de nombreuses ressources néces- saires à la transition du système énergétique (cuivre, lithium, cobalt...) présentent des enjeux de criticité réels, qui peuvent être de multiples natures et spécifiques à chaque ressource : volume des réserves connues, monopole, conflit d’usage et importance économique, substituabilité, impacts environnementaux liés à leur extraction, etc</li>
                        </ul>
                    </section>
                    <section>
                        <h3>La croissance des besoins en métaux spécifiques pour les batteries, notamment des véhicules électriques, constitue un point de vigilance réel</h3>
                        <ul>
                            <li>Les batteries lithium-ion, dont le coût a fortement baissé au cours des dernières années, s’imposent comme un des éléments incontournables des scénarios de décarbonation. Dans les différents scénarios, des batteries dédiées au système électrique peuvent être nécessaires pour accompagner le développement du photovoltaïque (100 GWh dans le scénario le plus haut), mais les volumes en jeu sont sans commune mesure avec ceux nécessaires pour le développement de la mobilité électrique (environ 2 900 GWh pour les véhicules particuliers)</li>
                            <li>À l’heure actuelle, les batteries utilisées dans les véhicules sont consommatrices de métaux jugés critiques comme le cobalt, le lithium, le nickel ou encore le manganèse. Pour différentes raisons, ces ressources présentent toutes des enjeux importants du point de vue de l’approvisionnement. Les réserves de cobalt sont limitées et son extraction est concentrée en République démocratique du Congo tandis que la Chine dispose d’une forme de monopole sur son raffinage. L’approvisionnement en lithium suscite une vigilance particulière dans un contexte de fort développement du véhicule électrique à l’échelle mondiale, de dépendance croissante à la Chine pour cette ressource et de faibles perspectives de recyclage</li>
                            <li>Des actions spécifiques visant à limiter ces besoins de ressources critiques seront donc nécessaires dans tous les cas : sobriété dans le secteur des transports (réduction du nombre de véhicules), limitation de la taille des batteries, développement de nouvelles générations de batteries avec un recours plus limité aux métaux comme le cobalt, etc.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Des matières comme le cuivre sont également sous surveillance, et d’autant plus dans les scénarios à forte part en énergies renouvelables</h3>
                        <ul>
                            <li>
                                Le cuivre est présent dans presque tous les composants du système électrique (nucléaire et renouvelables, batteries, réseau) ainsi que dans de nombreux autres secteurs économiques stratégiques (bâtiments, transports, télécommunications, industrie...) en croissance au niveau mondial. Des tensions sur son approvisionnement sont à prévoir, les capacités minières n’étant probablement pas suffisantes en l’état pour absorber une forte croissance de la demande. La demande de cuivre est plus importante dans les scénarios à forte proportion en énergies renouvelables mais les enjeux de criticité dépendront très largement de l’évolution de l’offre et la demande au niveau mondial ainsi que de l’évolution des capacités de recyclage
                            </li>
                            <li>Le silicium fait également l’objet d’une attention particulière. Si les gisements sont relativement abondants et répartis à travers le monde, le développement de nouvelles capacités d’extraction et de production de silice sera nécessaire pour accompagner la croissance du solaire et éviter un monopole total sur cette production.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Les scénarios de relance du nucléaire nécessitent d’ajuster la stratégie à long terme sur l’aval du cycle pour gérer dans la durée des volumes de matières et déchets radioactifs supplémentaires</h3>
                        <ul>
                            <li>Les réserves d’uranium naturel apparaissent aujourd’hui largement suffisantes pour assurer l’approvisionnement des centrales nucléaires françaises pour de nombreuses décennies, y compris en cas de relance forte du nucléaire.</li>
                            <li>En revanche, l’utilisation de l’uranium génère, en sortie des centrales, différents types de substances qui impliquent une gestion de très long terme du fait de leur caractère radioactif et de leur durée de vie. Certaines matières peuvent être recyclées dans des réacteurs existants ou futurs : la stratégie française de «cycle fermé» privilégie une réutilisation maximale de ces matières, mais des incertitudes existent sur ces perspectives, du fait de la suspension des projets expérimentaux de génération IV en France. Le cycle du combustible nécessite des infrastructures dédiées pour l’entreposage (piscines), essentielles au chargement et déchargement des réacteurs, ainsi que pour le traitement et le recyclage du combustible usé. Leurs coûts sont intégrés au chiffrage économique.</li>
                            <li>La production nucléaire génère, en outre, des déchets radioactifs ultimes qui devront être stockés sur plusieurs dizaines de milliers d’années, c’est l’objet du projet CIGEO. La relance d’un parc nucléaire augmentera le besoin d’infrastructures pour gérer à long terme les déchets issus du parc de nouveaux réacteurs. Ces besoins sont chiffrés dans les scénarios correspondants.</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Pour 2050, le système électrique de la neutralité carbone peut être atteint à un coût maîtrisable pour la France</h2>
                    <section>
                        <h3>Le coût global (au MWh) du système électrique national est susceptible d’augmenter mais dans des proportions qui peuvent être maîtrisées (de l’ordre de 15 % hors inflation, en vision médiane)</h3>
                        <ul>
                            <li>Ce niveau d’augmentation est moins important que ce qui pouvait être anticipé : construire un système électrique bas-carbone largement renouvelé et redimensionné pour accompagner la sortie des énergies fossiles peut donc être réalisé à coût maîtrisé, dès lors que ses coûts de financement sont faibles : l’étude retient 4% comme hypothèse centrale</li>
                            <li>ℹ️ Concernant l’aval, il est aujourd’hui plus cher de construire un véhicule électrique qu’un véhicule thermique, mais une fois ce choix réalisé, le coût d’approvisionnement en électricité est plus faible que de s’approvisionner en produits pétroliers. Il en va de même dans le secteur du bâtiment : la pompe à chaleur représente un coût à l’installation, mais elle est économique à l’utilisation. Dans l’industrie, les nouvelles usines ont un coût mais sont plus économes en électricité. Le coût de la transition peut être réduit s’il correspond au prochain cycle d’investissement et de modernisation de l’appareil productif français, qui a pris du retard sur celui de ses concurrents ces dernières années</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Pour atteindre la neutralité carbone, il faut doubler le rythme d’investissement dans le système électrique</h3>
                        <p>Cet investissement est important mais conduit en retour à créer un système dont le coût de fonctionnement opérationnel est très faible, et qui ne dépend plus du cours des énergies fossiles</p>
                    </section>
                    <section>
                        <h3>Dans un scénario de neutralité carbone, le coût de l’énergie est plus stable et ne dépend plus des cours du gaz fossile et du pétrole</h3>
                    </section>
                    <section>
                        <h3>Maîtriser l’évolution du coût du système électrique nécessite un encadrement public fort pour faire diminuer le coût de financement des nouveaux moyens de production bas-carbone et du réseau</h3>
                    </section>
                    <section>
                        <h3>Les dépenses énergétiques complètes des français dépendront de moins en moins du prix des hydrocarbures et de plus en plus de la compétitivité du système électrique</h3>
                    </section>
                </article>
                <article>
                    <h2>Pour 2030 : développer les énergies renouvelables matures le plus rapidement possible et prolonger les réacteurs nucléaires existants dans une logique de maximisation de la production bas-carbone augmente les chances d’atteindre la cible du nouveau paquet européen « -55% net »</h2>
                    <section>
                        <h3>Il est possible d’accélérer l’effort en vue d’atteindre la nouvelle cible 2030 en mobilisant tous les leviers envisageables</h3>
                        <ul>
                            <li>Toutes les analyses des «Futurs énergétiques 2050 » concourent à établir qu’une stratégie combinant
                                <ul>
                                    <li>(i) développement de nouveaux usages électriques</li>
                                    <li>(ii) fort accent sur l’efficacité énergétique (voire sur la sobriété)</li>
                                    <li>(iii) maximisation de la production d’électricité bas-carbone permet d’accélérer significativement la décarbonation à grande échelle du pays.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Cette trajectoire implique de maximiser la production d’électricité bas-carbone</h3>
                        <ul>
                            <li>La logique consistant à renforcer la capacité de production d’électricité bas-carbone (logique additive « renouvelables + nucléaire ») est celle qui présente le meilleur bilan climatique de court/moyen terme et donc celle qui est la plus à même de permettre l’atteinte des objectifs climatiques en 2030</li>
                        </ul>
                    </section>
                </article>
                <article>
                    <h2>Quel que soit le scénario choisi, il y a urgence à se mobiliser</h2>
                    <section>
                        <h3>La première de ces urgences est de répondre à la crise climatique en mettant le pays sur une trajectoire de décarbonation.</h3>
                        <p>Cette trajectoire est déjà engagée, mais elle devra passer dans le futur par des jalons ambitieux :
                            <ul>
                                <li>celui d’une réduction de 55% des émissions nettes en 2030 (par rapport à 1990) adopté cette année par l’Union européenne</li>
                                <li>des émissions encore plus faibles en 2040, jusqu’à la neutralité carbone complète en 2050. </li>
                            </ul>
                        </p>
                        <p>À cette échéance, la France ne devra plus émettre que de manière marginale, à la hauteur de ses puits de carbone (essentiellement la forêt et les cultures).</p>
                        <p>Une partie de ces défis se trouve du côté des usages : il est nécessaire de transformer progressivement l’ensemble des secteurs de l’économie et de l’activité française pour qu’ils parviennent à sortir de la consommation d’énergies d’origine fossile, en particulier pétrole et gaz.</p>
                        <p>Si un certain nombre de politiques publiques françaises sont déjà engagées et efficaces, et si des outils économiques tels que les marchés carbone sont déjà déployés à l’échelle européenne, les trajectoires devront être rapidement infléchies pour corriger l’empreinte carbone du pays. La crise climatique nécessite d’aller beaucoup plus vite durant la prochaine décennie que pendant celle qui précède, tout en garantissant une adhésion de la société aux objectifs et aux mesures engagées et en ne se limitant pas à transférer les émissions hors de France. De ce point de vue, les « Futurs énergétiques 2050 » ont montré que le scénario de consommation « réindustrialisation profonde » était bénéfique dès le court terme pour réduire l’empreinte carbone française. Il faut aussi souligner que l’abandon de la dépendance aux énergies fossiles, au-delà de toute considération géopolitique et de souveraineté, constitue une réponse structurelle aux crises énergétiques qui ont émaillé les dernières décennies, jusqu’à aujourd’hui avec la forte augmentation des prix du gaz fossile et du pétrole.</p>
                    </section>
                    <section>
                        <h3>La deuxième urgence, fortement liée à la première, tient à l’efficacité énergétique et la maîtrise des consommations en général.</h3>
                        <p>La deuxième urgence, fortement liée à la première, tient à l’efficacité énergétique et la maîtrise des consommations en général.</p>
                    </section>
                    <section>
                        <h3>La troisième urgence concerne la transformation des deux appareils de production d’énergies décarbonées qui subsisteront en 2050 : les bioénergies d’une part, l’électricité d’autre part.</h3>
                        <p>La définition du système électrique de demain constitue le cœur des « Futurs énergétiques 2050 » qui dessinent puis comparent les chemins possibles pour une France bas-carbone insérée dans l’Europe. L’étude révèle un certain nombre d’urgences d’ordre industriel.</p>
                        <p>Il est nécessaire, en toute hypothèse, de faciliter et d’accélérer par tous les moyens possibles l’installation de modes de production d’électricité bas-carbone. Les délais effectifs ou projetés en l’état, l’autorisation puis la construction de champs d’éoliennes terrestres ou en mer, de fermes photovoltaïques, ou encore de nouveaux réacteurs nucléaires sont très longs, et renvoient l’essentiel des mises en service de ce qui serait décidé aujourd’hui au-delà de 2030.</p>
                        <p><b>De tels délais ne sont pas compatibles avec l’ambition de réduire les émissions du pays, surtout si on renonce à l’une ou l’autre de ces trois grandes technologies.</b></p>
                    </section>
                </article>
            </div>
        </>
    );
}

export default App;
