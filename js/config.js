const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Google',
      key: '*',
      url: 'https://www.google.com',
      search: '/search?q={}'
    },

    {
      category: 'Media',
      name: 'FreshRSS',
      key: 'f',
      url: 'https://rss.repparw.me',
      color: 'linear-gradient(135deg, #0062BD, #005FBE)',
      icon: 'freshrss',
      quickLaunch: false,
    },
    {
      category: 'Media',
      name: 'Jellyfin',
      key: 'j',
      url: 'https://jellyfin.repparw.me',
      color: 'linear-gradient(135deg, #A95CC3, #04A3DB)',
      icon: 'jellyfin',
      quickLaunch: false,
    },
    {
      category: 'Media',
      name: 'Radarr',
      key: 'r',
      url: 'https://radarr.repparw.me',
      search: '/add/new?term={}',
      color: '#FFC230',
      icon: 'radarr',
      quickLaunch: false,
    },
    {
      category: 'Media',
      name: 'Sonarr',
      key: 's',
      url: 'https://sonarr.repparw.me',
      search: '/add/new?term={}',
      color: '#00CCFF',
      icon: 'sonarr',
      quickLaunch: false,
    },
    {
      category: 'Media',
      name: 'Trakt.tv',
      key: 't',
      url: 'https://trakt.tv/users/repparw',
      search: '/search?query={}',
      color: '#ED2224',
      icon: 'trakt',
      quickLaunch: false,
    },
 
    {
      category: 'Config',
      name: 'Bazarr',
      key: 'b',
      url: 'https://bazarr.repparw.me',
      color: '#E66001',
      icon: 'bazarr',
      quickLaunch: false,
    },
    {
      category: 'Config',
      name: 'Prowlarr',
      key: 'p',
      url: 'https://prowlarr.repparw.me',
      color: '#E66001',
      icon: 'prowlarr',
      quickLaunch: false,
    },

    {
      category: 'Config',
      name: 'QBittorrent',
      key: 'q',
      url: 'https://qbit.repparw.me',
      color: 'linear-gradient(135deg, #6AAEED, #3771BC)',
      icon: 'qbittorrent',
      quickLaunch: false,
    },

    {
      category: 'Fun',
      name: 'Reddit',
      key: 're',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Twitch',
      key: 'tw',
      url: 'https://www.twitch.tv',
      search: '/search?term={}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },


    {
      category: 'Other',
      name: 'Mail',
      key: 'g',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Translate',
      key: 'tr',
      url: 'https://translate.google.com/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: '/',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: ':',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
