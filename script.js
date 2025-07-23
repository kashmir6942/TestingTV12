// Channel data organized by categories
const channelsData = [
    { id: 1, number: "1", name: "tvN Movies Pinoy", category: "movies", program: "Premium Movies", url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd", drm: { '2e53f8d8a5e94bca8f9a1e16ce67df33': '3471b2464b5c7b033a03bb8307d9fa35' }, status: "unknown" },
    { id: 2, number: "2", name: "Tap Movies", category: "movies", program: "Action Movies", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd", drm: { '71cbdf02b595468bb77398222e1ade09': 'c3f2aa420b8908ab8761571c01899460' }, status: "unknown" },
    { id: 8, number: "8", name: "Pinoy Box Office (PBO)", category: "movies", program: "Filipino Movies", url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd", drm: { 'dcbdaaa6662d4188bdf97f9f0ca5e830': '31e752b441bd2972f2b98a4b1bc1c7a1' }, status: "unknown" },
    { id: 9, number: "9", name: "Viva Cinema", category: "movies", program: "Filipino Cinema", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd", drm: { '07aa813bf2c147748046edd930f7736e': '3bd6688b8b44e96201e753224adfc8fb' }, status: "unknown" },
    { id: 10, number: "10", name: "Tagalog Movie Channel (TMC)", category: "movies", program: "Tagalog Movies", url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd", drm: { '96701d297d1241e492d41c397631d857': 'ca2931211c1a261f082a3a2c4fd9f91b' }, status: "unknown" },
    { id: 11, number: "11", name: "HBO", category: "movies", program: "Premium Series", url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd", drm: { 'd47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b' }, status: "unknown" },
    { id: 12, number: "12", name: "HBO Hits", category: "movies", program: "HBO Movies", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd", drm: { 'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1' }, status: "unknown" },
    { id: 13, number: "13", name: "DreamWorks (Tagalized)", category: "movies", program: "Animated Movies", url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd", drm: { '564b3b1c781043c19242c66e348699c5': 'd3ad27d7fe1f14fb1a2cd5688549fbab' }, status: "unknown" },
    { id: 18, number: "18", name: "Rock Action", category: "movies", program: "Action Movies", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd", drm: { '0f852fb8412b11edb8780242ac120002': '4cbc004d8c444f9f996db42059ce8178' }, status: "unknown" },
    { id: 23, number: "23", name: "HBO Signature", category: "movies", program: "HBO Originals", url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd", drm: { 'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f' }, status: "unknown" },
    { id: 24, number: "24", name: "Tap Action Flix", category: "movies", program: "Action Movies", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd", drm: { 'bee1066160c0424696d9bf99ca0645e3': 'f5b72bf3b89b9848de5616f37de040b7' }, status: "unknown" },
    { id: 25, number: "25", name: "KIX", category: "movies", program: "Action Entertainment", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd", drm: { 'a8d5712967cd495ca80fdc425bc61d6b': 'f248c29525ed4c40cc39baeee9634735' }, status: "unknown" },
    { id: 34, number: "34", name: "HBO Family", category: "movies", program: "Family Entertainment", url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd", drm: { '872910c843294319800d85f9a0940607': 'f79fd895b79c590708cf5e8b5c6263be' }, status: "unknown" },
    { id: 40, number: "40", name: "Cinemax", category: "movies", program: "Premium Movies", url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd", drm: { 'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955' }, status: "unknown" },
    { id: 52, number: "52", name: "Celestial Movies Pinoy", category: "movies", program: "Asian Movies", url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd", drm: { '0f8537d8412b11edb8780242ac120002': '2ffd7230416150fd5196fd7ea71c36f3' }, status: "unknown" },
    { id: 53, number: "53", name: "HITS Movies", category: "movies", program: "Asian Movies", url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd", drm: { 'f56b57b32d7e4b2cb21748c0b56761a7': '3df06a89aa01b32655a77d93e09e266f' }, status: "unknown" },
    { id: 54, number: "54", name: "THRILL", category: "movies", program: "Thriller Movies", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd", drm: { '928114ffb2394d14b5585258f70ed183': 'a82edc340bc73447bac16cdfed0a4c62' }, status: "unknown" },

    { id: 3, number: "3", name: "Bilyonaryo Channel", category: "news", program: "Business News", url: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd", drm: { '227ffaf09bec4a889e0e0988704d52a2': 'b2d0dce5c486891997c1c92ddaca2cd2' }, status: "unknown" },
    { id: 4, number: "4", name: "One News", category: "news", program: "Breaking News", url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd", drm: { 'd39eb201ae494a0b98583df4d110e8dd': '6797066880d344422abd3f5eda41f45f' }, status: "unknown" },
    { id: 5, number: "5", name: "RPTV", category: "news", program: "News & Current Affairs", url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd", drm: { '1917f4caf2364e6d9b1507326a85ead6': 'a1340a251a5aa63a9b0ea5d9d7f67595' }, status: "unknown" },
    { id: 44, number: "44", name: "ABC Australia", category: "news", program: "Australian News", url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd", drm: { '389497f9f8584a57b234e27e430e04b7': '3b85594c7f88604adf004e45c03511c0' }, status: "unknown" },
    { id: 46, number: "46", name: "Bloomberg", category: "news", program: "Financial News", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd", drm: { 'ef7d9dcfb99b406cb79fb9f675cba426': 'b24094f6ca136af25600e44df5987af4' }, status: "unknown" },
    { id: 47, number: "47", name: "BBC News", category: "news", program: "World News", url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd", drm: { 'f59650be475e4c34a844d4e2062f71f3': '119639e849ddee96c4cec2f2b6b09b40' }, status: "unknown" },
    { id: 51, number: "51", name: "CNN Philippines", category: "news", program: "Local News", url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_cnnhd.mpd", drm: { '900c43f0e02742dd854148b7a75abbec': 'da315cca7f2902b4de23199718ed7e90' }, status: "unknown" },
    { id: 58, number: "58", name: "Channel News Asia", category: "news", program: "Asian News", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd", drm: { 'b259df9987364dd3b778aa5d42cb9acd': '753e3dba96ab467e468269e7e33fb813' }, status: "unknown" },
    { id: 59, number: "59", name: "Arirang", category: "news", program: "Korean News", url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd", drm: { '13815d0fa026441ea7662b0c9de00bcf': '2d99a55743677c3879a068dd9c92f824' }, status: "unknown" },
    { id: 60, number: "60", name: "NHK World Japan", category: "news", program: "Japanese News", url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd", drm: { '3d6e9d4de7d7449aadd846b7a684e564': '0800fff80980f47f7ac6bc60b361b0cf' }, status: "unknown" },
    { id: 63, number: "63", name: "CNN International", category: "news", program: "International News", url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd", drm: { '900c43f0e02742dd854148b7a75abbec': 'da315cca7f2902b4de23199718ed7e90' }, status: "unknown" },
    { id: 64, number: "64", name: "France24", category: "news", program: "French News", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd", drm: { '257f9fdeb39d41bdb226c2ae1fbdaeb6': 'e80ead0f4f9d6038ab34f332713ceaa5' }, status: "unknown" },

    { id: 14, number: "14", name: "PBA RUSH", category: "sports", program: "Basketball Live", url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd", drm: { '76dc29dd87a244aeab9e8b7c5da1e5f3': '95b2f2ffd4e14073620506213b62ac82' }, status: "unknown" },
    { id: 15, number: "15", name: "One Sports+", category: "sports", program: "Sports Live", url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd", drm: { '322d06e9326f4753a7ec0908030c13d8': '1e3e0ca32d421fbfec86feced0efefda' }, status: "unknown" },
    { id: 16, number: "16", name: "Tap Sports", category: "sports", program: "Sports Coverage", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd", drm: { 'eabd2d95c89e42f2b0b0b40ce4179ea0': '0e7e35a07e2c12822316c0dc4873903f' }, status: "unknown" },
    { id: 31, number: "31", name: "UAAP Varsity Channel", category: "sports", program: "College Sports", url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd", drm: { '95588338ee37423e99358a6d431324b9': '6e0f50a12f36599a55073868f814e81e' }, status: "unknown" },
    { id: 36, number: "36", name: "SPOTV", category: "sports", program: "Sports Live", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd", drm: { 'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e' }, status: "unknown" },
    { id: 37, number: "37", name: "SPOTV2", category: "sports", program: "Sports Coverage", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd", drm: { '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed' }, status: "unknown" },
    { id: 38, number: "38", name: "Premier Sports 2", category: "sports", program: "Tennis & Sports", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd", drm: { '59454adb530b4e0784eae62735f9d850': '61100d0b8c4dd13e4eb8b4851ba192cc' }, status: "unknown" },
    { id: 39, number: "39", name: "NBA TV Philippines", category: "sports", program: "Basketball Coverage", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd", drm: { 'f36eed9e95f140fabbc88a08abbeafff': '0125600d0eb13359c28bdab4a2ebe75a' }, status: "unknown" },

    { id: 6, number: "6", name: "TV5", category: "entertainment", program: "General Entertainment", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd", drm: { '2615129ef2c846a9bbd43a641c7303ef': '07c7f996b1734ea288641a68e1cfdc4d' }, status: "unknown" },
    { id: 7, number: "7", name: "A2Z", category: "entertainment", program: "Variety Shows", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd", drm: { 'f703e4c8ec9041eeb5028ab4248fa094': 'c22f2162e176eee6273a5d0b68d19530' }, status: "unknown" },
    { id: 17, number: "17", name: "TVUP!", category: "entertainment", program: "Variety Entertainment", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd", drm: { '83e813ccd4ca4837afd611037af02f63': 'a97c515dbcb5dcbc432bbd09d15afd41' }, status: "unknown" },
    { id: 19, number: "19", name: "Tap TV", category: "entertainment", program: "General Entertainment", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd", drm: { 'f6804251e90b4966889b7df94fdc621e': '55c3c014f2bd12d6bd62349658f24566' }, status: "unknown" },
    { id: 20, number: "20", name: "Knowledge Channel", category: "entertainment", program: "Educational Content", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd", drm: { '0f856fa0412b11edb8780242ac120002': '783374273ef97ad3bc992c1d63e091e7' }, status: "unknown" },
    { id: 21, number: "21", name: "DepEd TV", category: "entertainment", program: "Educational Programs", url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd", drm: { '0f853706412b11edb8780242ac120002': '2157d6529d80a760f60a8b5350dbc4df' }, status: "unknown" },
    { id: 22, number: "22", name: "Fashion TV", category: "entertainment", program: "Fashion & Lifestyle", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd", drm: { '971ebbe2d887476398e97c37e0c5c591': '472aa631b1e671070a4bf198f43da0c7' }, status: "unknown" },
    { id: 26, number: "26", name: "Warner TV", category: "entertainment", program: "Premium Series", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd", drm: { '4503cf86bca3494ab95a77ed913619a0': 'afc9c8f627fb3fb255dee8e3b0fe1d71' }, status: "unknown" },
    { id: 27, number: "27", name: "HITS", category: "entertainment", program: "Asian Entertainment", url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd", drm: { 'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5' }, status: "unknown" },
    { id: 28, number: "28", name: "tvN Premium", category: "entertainment", program: "Korean Drama", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd", drm: { 'e1bde543e8a140b38d3f84ace746553e': 'b712c4ec307300043333a6899a402c10' }, status: "unknown" },
    { id: 29, number: "29", name: "History", category: "entertainment", program: "Historical Documentaries", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd", drm: { 'a7724b7ca2604c33bb2e963a0319968a': '6f97e3e2eb2bade626e0281ec01d3675' }, status: "unknown" },
    { id: 30, number: "30", name: "BBC Earth", category: "entertainment", program: "Nature Documentaries", url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd", drm: { '34ce95b60c424e169619816c5181aded': '0e2a2117d705613542618f58bf26fc8e' }, status: "unknown" },
    { id: 32, number: "32", name: "TrueFM TV", category: "entertainment", program: "Music & Entertainment", url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd", drm: { '0559c95496d44fadb94105b9176c3579': '40d8bb2a46ffd03540e0c6210ece57ce' }, status: "unknown" },
    { id: 33, number: "33", name: "TV Maria", category: "entertainment", program: "Religious Programming", url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd", drm: { 'fa3998b9a4de40659725ebc5151250d6': '998f1294b122bbf1a96c1ddc0cbb229f' }, status: "unknown" },
    { id: 35, number: "35", name: "Rock Entertainment", category: "entertainment", program: "Music & Entertainment", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd", drm: { 'e4ee0cf8ca9746f99af402ca6eed8dc7': 'be2a096403346bc1d0bb0f812822bb62' }, status: "unknown" },
    { id: 41, number: "41", name: "Lifetime", category: "entertainment", program: "Women's Entertainment", url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd", drm: { 'cf861d26e7834166807c324d57df5119': '64a81e30f6e5b7547e3516bbf8c647d0' }, status: "unknown" },
    { id: 42, number: "42", name: "Food Network", category: "entertainment", program: "Cooking Shows", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd", drm: { 'b7299ea0af8945479cd2f287ee7d530e': 'b8ae7679cf18e7261303313b18ba7a14' }, status: "unknown" },
    { id: 43, number: "43", name: "AXN", category: "entertainment", program: "Action Series", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd", drm: { 'fd5d928f5d974ca4983f6e9295dfe410': '3aaa001ddc142fedbb9d5557be43792f' }, status: "unknown" },
    { id: 45, number: "45", name: "Travel Channel", category: "entertainment", program: "Travel Shows", url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd", drm: { 'f3047fc13d454dacb6db4207ee79d3d3': 'bdbd38748f51fc26932e96c9a2020839' }, status: "unknown" },
    { id: 48, number: "48", name: "Cartoon Network", category: "entertainment", program: "Kids Animation", url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd", drm: { 'a2d1f552ff9541558b3296b5a932136b': 'cdd48fa884dc0c3a3f85aeebca13d444' }, status: "unknown" },
    { id: 49, number: "49", name: "HITS Now", category: "entertainment", program: "Asian Content", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd", drm: { '14439a1b7afc4527bb0ebc51cf11cbc1': '92b0287c7042f271b266cc11ab7541f1' }, status: "unknown" },
    { id: 50, number: "50", name: "Moonbug Kids", category: "entertainment", program: "Kids Content", url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd", drm: { '0bf00921bec94a65a124fba1ef52b1cd': '0f1488487cbe05e2badc3db53ae0f29f' }, status: "unknown" },
    { id: 55, number: "55", name: "Lotus Macao", category: "entertainment", program: "Asian Entertainment", url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd", drm: { '60dc692e64ea443a8fb5ac186c865a9b': '01bdbe22d59b2a4504b53adc2f606cc1' }, status: "unknown" },
    { id: 56, number: "56", name: "BBC Lifestyle", category: "entertainment", program: "Lifestyle Shows", url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd", drm: { '34880f56627c11ee8c990242ac120002': 'c23677c829bb244b79a3dc09ffd88ca0' }, status: "unknown" },
    { id: 57, number: "57", name: "Discovery Channel", category: "entertainment", program: "Documentaries", url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd", drm: { 'd9ac48f5131641a789328257e778ad3a': 'b6e67c37239901980c6e37e0607ceee6' }, status: "unknown" },
    { id: 61, number: "61", name: "Animal Planet", category: "entertainment", program: "Wildlife Shows", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd", drm: { '436b69f987924fcbbc06d40a69c2799a': 'c63d5b0d7e52335b61aeba4f6537d54d' }, status: "unknown" },
    { id: 62, number: "62", name: "KBS World", category: "entertainment", program: "Korean Entertainment", url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd", drm: { '22ff2347107e4871aa423bea9c2bd363': 'c6e7ba2f48b3a3b8269e8bc360e60404' }, status: "unknown" },
    { id: 65, number: "65", name: "CBeebies", category: "entertainment", program: "Kids Shows", url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5093/default_ott.mpd", drm: { '50c699c444e5f80dacafc4c99667d810': 'de6c5feaae5f6963b4b392ddc8b6a778' }, status: "unknown" },
    { id: 66, number: "66", name: "Kapamilya Channel", category: "entertainment", program: "Filipino Entertainment", url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd", drm: { 'bd17afb5dc9648a39be79ee3634dd4b8': '3ecf305d54a7729299b93a3d69c02ea5' }, status: "unknown" }
];

// Group configuration
const channelGroups = {
    movies: {
        name: "Movies & Cinema",
        icon: "fas fa-film",
        channels: []
    },
    news: {
        name: "News & Current Affairs",
        icon: "fas fa-newspaper",
        channels: []
    },
    sports: {
        name: "Sports & Live Events",
        icon: "fas fa-futbol",
        channels: []
    },
    entertainment: {
        name: "Entertainment & Lifestyle",
        icon: "fas fa-star",
        channels: []
    }
};

let currentChannel = null;
let isPlaying = false;
let player = null;
let filteredChannels = channelsData;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const mainApp = document.getElementById('mainApp');
const enterBtn = document.getElementById('enterBtn');
const channelGroups_element = document.getElementById('channelGroups');
const searchInput = document.getElementById('searchInput');
const currentChannelElement = document.getElementById('currentChannel');
const currentProgramElement = document.getElementById('currentProgram');
const channelCountElement = document.getElementById('channelCount');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const loadingOverlay = document.getElementById('loadingOverlay');
const digitalClock = document.getElementById('digitalClock');
const videoElement = document.getElementById('video');
const videoPlaceholder = document.getElementById('videoPlaceholder');

// Initialize the application
function init() {
    if (!shaka.Player.isBrowserSupported()) {
        alert('Shaka Player is not supported in this browser.');
        return;
    }
    
    organizeChannelsByGroups();
    setupEventListeners();
    updateDigitalClock();
    setInterval(updateDigitalClock, 1000);
    initializePlayer();
}

// Organize channels by groups
function organizeChannelsByGroups() {
    // Clear existing channels in groups
    Object.keys(channelGroups).forEach(key => {
        channelGroups[key].channels = [];
    });
    
    // Organize channels into groups
    channelsData.forEach(channel => {
        if (channelGroups[channel.category]) {
            channelGroups[channel.category].channels.push(channel);
        }
    });
}

// Initialize Shaka Player
function initializePlayer() {
    player = new shaka.Player(videoElement);
    
    player.addEventListener('error', (event) => {
        console.error('Shaka Player error:', event.detail);
    });
    
    videoElement.addEventListener('loadstart', () => {
        videoPlaceholder.classList.add('hidden');
    });
    
    videoElement.addEventListener('error', () => {
        videoPlaceholder.classList.remove('hidden');
    });
}

// Update digital clock (12-hour format)
function updateDigitalClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });
    
    const [time, period] = timeString.split(' ');
    digitalClock.querySelector('.time').textContent = time;
    digitalClock.querySelector('.period').textContent = period;
}

// Setup event listeners
function setupEventListeners() {
    // Welcome screen
    enterBtn.addEventListener('click', enterApplication);
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Video controls
    playPauseBtn.addEventListener('click', togglePlayPause);
    volumeBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('input', handleVolumeChange);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Enter application from welcome screen
function enterApplication() {
    welcomeScreen.style.display = 'none';
    mainApp.style.display = 'flex';
    renderChannelGroups();
    updateChannelCount();
}

// Render channel groups
function renderChannelGroups() {
    channelGroups_element.innerHTML = '';
    
    Object.keys(channelGroups).forEach(groupKey => {
        const group = channelGroups[groupKey];
        if (group.channels.length === 0) return;
        
        const groupElement = document.createElement('div');
        groupElement.className = 'channel-group';
        groupElement.innerHTML = `
            <div class="group-header" data-group="${groupKey}">
                <div class="group-title">
                    <div class="group-icon">
                        <i class="${group.icon}"></i>
                    </div>
                    <span class="group-name">${group.name}</span>
                </div>
                <div class="group-count">${group.channels.length}</div>
                <i class="fas fa-chevron-right group-arrow"></i>
            </div>
            <div class="channels-list" id="channels-${groupKey}">
                ${group.channels.map(channel => `
                    <div class="channel-item" data-channel-id="${channel.id}">
                        <div class="channel-number">${channel.number}</div>
                        <div class="channel-info-item">
                            <div class="channel-name">${channel.name}</div>
                            <div class="channel-program">${channel.program}</div>
                        </div>
                        <div class="channel-status ${channel.status}"></div>
                    </div>
                `).join('')}
            </div>
        `;
        
        channelGroups_element.appendChild(groupElement);
        
        // Add event listeners
        const groupHeader = groupElement.querySelector('.group-header');
        const channelsList = groupElement.querySelector('.channels-list');
        
        groupHeader.addEventListener('click', () => toggleGroup(groupHeader, channelsList));
        
        // Add channel click listeners
        const channelItems = groupElement.querySelectorAll('.channel-item');
        channelItems.forEach(item => {
            item.addEventListener('click', () => {
                const channelId = parseInt(item.dataset.channelId);
                const channel = channelsData.find(ch => ch.id === channelId);
                if (channel) selectChannel(channel, item);
            });
        });
    });
}

// Toggle group expansion
function toggleGroup(header, channelsList) {
    const isActive = header.classList.contains('active');
    
    // Close all other groups
    document.querySelectorAll('.group-header').forEach(h => {
        h.classList.remove('active');
    });
    document.querySelectorAll('.channels-list').forEach(list => {
        list.classList.remove('expanded');
    });
    
    // Toggle current group
    if (!isActive) {
        header.classList.add('active');
        channelsList.classList.add('expanded');
    }
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        // Show all channels organized by groups
        renderChannelGroups();
        return;
    }
    
    // Filter channels based on search
    filteredChannels = channelsData.filter(channel => 
        channel.name.toLowerCase().includes(searchTerm) || 
        channel.program.toLowerCase().includes(searchTerm)
    );
    
    // Render filtered results
    renderSearchResults(filteredChannels);
}

// Render search results
function renderSearchResults(channels) {
    channelGroups_element.innerHTML = '';
    
    if (channels.length === 0) {
        channelGroups_element.innerHTML = `
            <div style="text-align: center; padding: 40px; color: rgba(255, 255, 255, 0.6);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>No channels found</p>
            </div>
        `;
        return;
    }
    
    const searchGroup = document.createElement('div');
    searchGroup.className = 'channel-group';
    searchGroup.innerHTML = `
        <div class="group-header active">
            <div class="group-title">
                <div class="group-icon">
                    <i class="fas fa-search"></i>
                </div>
                <span class="group-name">Search Results</span>
            </div>
            <div class="group-count">${channels.length}</div>
        </div>
        <div class="channels-list expanded">
            ${channels.map(channel => `
                <div class="channel-item" data-channel-id="${channel.id}">
                    <div class="channel-number">${channel.number}</div>
                    <div class="channel-info-item">
                        <div class="channel-name">${channel.name}</div>
                        <div class="channel-program">${channel.program}</div>
                    </div>
                    <div class="channel-status ${channel.status}"></div>
                </div>
            `).join('')}
        </div>
    `;
    
    channelGroups_element.appendChild(searchGroup);
    
    // Add channel click listeners
    const channelItems = searchGroup.querySelectorAll('.channel-item');
    channelItems.forEach(item => {
        item.addEventListener('click', () => {
            const channelId = parseInt(item.dataset.channelId);
            const channel = channelsData.find(ch => ch.id === channelId);
            if (channel) selectChannel(channel, item);
        });
    });
}

// Select channel
async function selectChannel(channel, channelElement) {
    if (!player) return;
    
    showLoading();
    
    try {
        // Stop current playback
        await player.unload();
        
        // Configure DRM
        player.configure({
            drm: {
                clearKeys: channel.drm
            }
        });
        
        // Load new stream
        await player.load(channel.url);
        
        currentChannel = channel;
        currentChannelElement.textContent = channel.name;
        currentProgramElement.textContent = `Now Playing: ${channel.program}`;
        
        // Update active channel in list
        document.querySelectorAll('.channel-item').forEach(item => {
            item.classList.remove('active');
        });
        channelElement.classList.add('active');
        
        // Hide placeholder and show video
        videoPlaceholder.classList.add('hidden');
        
        // Auto-play
        videoElement.play();
        isPlaying = true;
        updatePlayPauseButton();
        
        // Update channel status to online if successful
        channel.status = 'online';
        updateChannelStatus(channel);
        
    } catch (error) {
        console.error('Failed to load channel:', error);
        
        // Update channel status to offline
        channel.status = 'offline';
        updateChannelStatus(channel);
        
        // Show placeholder
        videoPlaceholder.classList.remove('hidden');
        
        // Show error message
        showErrorMessage(`Failed to load ${channel.name}. The stream may be offline.`);
    }
    
    hideLoading();
}

// Update channel status in UI
function updateChannelStatus(channel) {
    const channelItems = document.querySelectorAll(`[data-channel-id="${channel.id}"]`);
    channelItems.forEach(item => {
        const statusElement = item.querySelector('.channel-status');
        statusElement.className = `channel-status ${channel.status}`;
    });
    updateChannelCount();
}

// Update channel count
function updateChannelCount() {
    const onlineCount = channelsData.filter(ch => ch.status === 'online').length;
    const offlineCount = channelsData.filter(ch => ch.status === 'offline').length;
    const totalCount = channelsData.length;
    
    channelCountElement.innerHTML = `
        ${totalCount} channels • 
        <span style="color: #2ed573;">${onlineCount} online</span> • 
        <span style="color: #ff4757;">${offlineCount} offline</span>
    `;
}

// Video controls
function togglePlayPause() {
    if (!currentChannel) return;
    
    if (videoElement.paused) {
        videoElement.play();
        isPlaying = true;
    } else {
        videoElement.pause();
        isPlaying = false;
    }
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    const icon = playPauseBtn.querySelector('i');
    icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

function toggleMute() {
    videoElement.muted = !videoElement.muted;
    const icon = volumeBtn.querySelector('i');
    icon.className = videoElement.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
}

function handleVolumeChange(e) {
    const volume = e.target.value / 100;
    videoElement.volume = volume;
    
    const icon = volumeBtn.querySelector('i');
    if (volume === 0) {
        icon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        icon.className = 'fas fa-volume-down';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.querySelector('i').className = 'fas fa-compress';
    } else {
        document.exitFullscreen();
        fullscreenBtn.querySelector('i').className = 'fas fa-expand';
    }
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Only handle shortcuts when not in welcome screen
    if (welcomeScreen.style.display !== 'none') return;
    
    switch(e.key) {
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
        case 'm':
        case 'M':
            toggleMute();
            break;
        case 'Escape':
            if (searchInput.value) {
                searchInput.value = '';
                handleSearch({ target: { value: '' } });
            }
            break;
    }
}

// Loading overlay
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// Show error message
function showErrorMessage(message) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 71, 87, 0.9);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 3000;
        backdrop-filter: blur(10px);
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Add CSS animation for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);