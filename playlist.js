const btsData = [
    {
        artist: "BTS",
        type: "Group",
        songs :[  
            {title : "Dynamite", releaseDate: "2020-08-21", album: "BE", priority: 5},
            {title : "Butter", releaseDate: "2021-05-21", album: "Butter", priority: 5},
            {title : "Permission to Dance", releaseDate: "2021-07-09", album: "Butter", priority: 5},
            {title : "Life Goes On", releaseDate: "2020-11-20", album: "BE",priority: 5},
            {title : "Fake Love", releaseDate: "2018-05-18", album: "Love Yourself: Tear", priority: 5},
            {title : "Blood Sweat & Tears", releaseDate: "2016-10-10", album: "Wings", priority: 5},   
            {title : "Spring Day", releaseDate: "2017-02-13", album: "You Never Walk Alone", priority: 5},
            {title : "Fire", releaseDate: "2016-05-02", album: "The Most Beautiful Moment in Life: Young Forever", priority: 5},
            {title : "Dope", releaseDate: "2015-09-08", album: "The Most Beautiful Moment in Life, Part 1", priority: 5},    
            {title : "I Need U", releaseDate: "2015-04-29", album: "The Most Beautiful Moment in Life, Part 1", priority: 5},
            {title : "Run", releaseDate: "2015-11-30", album: "The Most Beautiful Moment in Life, Part 2", priority: 1},
            {title : "Not Today", releaseDate: "2017-02-20", album: "You Never Walk Alone", priority: 2},
            {title : "Save Me", releaseDate: "2016-05-22", album: "The Most Beautiful Moment in Life: Young Forever", priority: 5},
            {title : "Anpanman", releaseDate: "2018-09-18", album: "Love Yourself: Answer", priority: 3 },
            {title : "Go Go", releaseDate: "2017-02-13", album: "You Never Walk Alone", priority: 5},
            {title : "Euphoria", releaseDate: "2018-04-05", album: "Love Yourself: Answer", priority: 1},
            {title : "Serendipity", releaseDate: "2017-09-08", album: "Love Yourself: Her", priority: 1 },
            {title : "Singularity", releaseDate: "2018-05-07", album: "Love Yourself: Tear", priority: 1},
            {title : "Magic Shop", releaseDate: "2018-02-13", album: "Love Yourself: Tear", priority: 1},
            {title : "Airplane pt.2", releaseDate: "2018-02-13", album: "Love Yourself: Tear", priority: 3}, 
            {title : "IDOL", releaseDate: "2018-08-24", album: "Love Yourself: Answer", priority: 5},     
            {title : "On", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 5},
            {title : "Black Swan", releaseDate: "2020-01-17", album: "Map of the Soul: 7", priority: 5},
            {title : "ON (feat. Sia)", releaseDate: "2020-02-28", album: "Map of the Soul: 7", priority: 5},
            {title : "Dionysus", releaseDate: "2019-11-30", album: "Map of the Soul: Persona", priority: 3},    
            {title : "Jamais Vu", releaseDate: "2019-11-18", album: "Map of the Soul: Persona", priority: 1},
            {title : "Inner Child", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1}, 
            {title : "Stay Gold", releaseDate: "2020-06-19", album: "Map of the Soul: 7", priority: 1},
            {title : "We Are Bulletproof: The Eternal", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 2},    
            {title : "Friends", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Moon", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Respect", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1, },    
            {title : "00:00 (Zero O'Clock)", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 5},
            {title : "Louder than bombs", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 3},
            {title : "UGH!", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 5},
            {title : "Cypher pt.4", releaseDate: "2017-11-17", album: "Love Yourself: Answer", priority: 5},
            {title : "Ddaeng", releaseDate: "2018-12-07", album: "Love Yourself: Answer", priority: 1},
            {title : "Outro: Tear", releaseDate: "2018-05-18", album: "Love Yourself: Tear", priority: 1},
            {title : "Outro: Her", releaseDate: "2017-09-18", album: "Love Yourself: Her", priority: 1},
            {title : "Outro: Ego", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Outro: Persona", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 1},
            {title : "Outro: Wings", releaseDate: "2016-10-10", album: "Wings", priority: 1},    
            {title : "Cypher pt.3", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Cypher pt.2", releaseDate: "2015-11-30", album: "The Most Beautiful Moment in Life, Part 2", priority: 1},
            {title : "Cypher pt.1", releaseDate: "2015-04-29", album: "The Most Beautiful Moment in Life, Part 1", priority: 1},
            {title : "Intro: Persona", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 1},
            {title : "Boy With Luv (feat. Halsey)", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 5},
            {title : "Make It Right (feat. Lauv)", releaseDate: "2019-10-18", album: "Map of the Soul: Persona", priority: 5},
            {title : "My Universe (feat. Coldplay)", releaseDate: "2019-11-18", album: "Map of the Soul: Persona", priority: 5},
            {title : "Just One Day", releaseDate: "2014-09-29", album: "Skool Luv Affair", priority: 3},
            {title : "No More Dream", releaseDate: "2013-06-13", album: "2 Cool 4 Skool", priority: 4},
            {title : "We On", releaseDate: "2013-06-13", album: "2 Cool 4 Skool", priority: 4},
            {title : "N.O", releaseDate: "2013-09-11", album: "2 Cool 4 Skool", priority: 4},
            {title : "Attack on Bangtan", releaseDate: "2013-09-11", album: "2 Cool 4 Skool", priority: 1},
            {title : "Pied Piper", releaseDate: "2017-09-18", album: "Love Yourself: Answer", priority: 5},
            {title : "Go Go", releaseDate: "2017-02-13", album: "You Never Walk Alone", priority: 2},
            {title : "Blue & Grey", releaseDate: "2020-11-20", album: "BE", priority: 1},
            {title : "Telepathy", releaseDate: "2020-11-20", album: "BE", priority: 1},
            {title : "Silver Spoon", releaseDate: "2016-10-10", album: "Wings", priority: 5},
            {title : "Dis-ease", releaseDate: "2020-11-20", album: "BE", priority: 1},
            {title : "Danger", releaseDate: "2014-09-29", album: "Skool Luv Affair", priority: 1},
            {title : "Dimple", releaseDate: "2018-09-18", album: "Love Yourself: Answer", priority: 3},
            {title : "Trivia: Seesaw", releaseDate: "2018-09-18", album: "Love Yourself: Answer", priority: 1},
            {title : "For Youth", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 3},
            {title : "Film out", releaseDate: "2021-11-20", album: "BE", priority: 1},
            {title : "Stay", releaseDate: "2022-02-21", album: "BE", priority: 3},
            {title : "Yet To Come (The Most Beautiful Moment)", releaseDate: "2022-06-10", album: "Proof", priority: 1},
            {title : "Best of Me", releaseDate: "2017-09-18", album: "Love Yourself: Answer", priority: 3},
            {title : "Airplane pt.2", releaseDate: "2018-02-13", album: "Love Yourself: Tear", priority: 3},
            {title : "Lights", releaseDate: "2019-06-07", album: "Map of the Soul: Persona", priority: 1},
            {title : "MIC Drop (Steve Aoki Remix)", releaseDate: "2017-11-24", album: "Love Yourself: Answer", priority: 5},
            {title : "Don`t Leave Me", releaseDate: "2017-09-18", album: "Love Yourself: Answer", priority: 3},
            {title : "Your Eyes Tell", releaseDate: "2018-09-18", album: "Love Yourself: Answer", priority: 3},
            {title : "Crystal Snow", releaseDate: "2017-12-13", album: "Love Yourself: Answer", priority: 3},
            {title : "The Truth Untold (feat. Steve Aoki)", releaseDate: "2018-02-13", album: "Love Yourself: Tear", priority: 3},
            {title : "Love Maze", releaseDate: "2018-02-13", album: "Love Yourself: Tear", priority: 3},
            {title : "So What", releaseDate: "2018-09-18", album: "Love Yourself: Answer", priority: 3},
            {title : "Hold Me Tight", releaseDate: "2015-04-29", album: "The Most Beautiful Moment in Life, Part 1", priority: 1},
            {title : "Autumn Leaves", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Butterfly", releaseDate: "2015-11-30", album: "The Most Beautiful Moment in Life, Part 2", priority: 2},
            {title : "Lost", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Young Forever", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Converse High", releaseDate: "2016-11-18", album: "Wings", priority: 3},
            {title : "Moving On", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "House of Cards", releaseDate: "2016-11-18", album: "Wings", priority: 2},
            {title : "Run", releaseDate: "2015-11-30", album: "The Most Beautiful Moment in Life, Part 2", priority: 1},
            {title : "Love is Not Over", releaseDate: "2016-11-18", album: "Wings", priority: 5},
            {title : "Intro: Boy Meets Evil", releaseDate: "2016-10-10", album: "Wings", priority: 4},
            {title : "Begin", releaseDate: "2016-10-10", album: "Wings", priority: 1},
            {title : "Lie", releaseDate: "2016-10-10", album: "Wings", priority: 4},
            {title : "Stigma", releaseDate: "2016-10-10", album: "Wings", priority: 1},
            {title : "First Love", releaseDate: "2016-10-10", album: "Wings", priority: 11},
            {title : "Reflection", releaseDate: "2016-10-10", album: "Wings", priority: 1},
            {title : "MAMA", releaseDate: "2013-06-13", album: "2 Cool 4 Skool", priority:1},
            {title : "Awake", releaseDate: "2016-10-10", album: "Wings", priority: 1},
            {title : "Lost", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Am I Wrong", releaseDate: "2016-11-18", album: "Wings", priority: 5},
            {title : "21st Century Girl", releaseDate: "2016-11-18", album: "Wings", priority: 3},
            {title : "2! 3!", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Microcosmos", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 1},
            {title : "Home", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 1},
            {title : "Interlude: Shadow", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Inner Child", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Intro: What Am I To Do", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "War of Hormone", releaseDate: "2014-09-29", album: "Skool Luv Affair", priority: 1},
            {title : "Hip Hop Lover", releaseDate: "2014-09-29", album: "Skool Luv Affair", priority: 1},
            {title : "Let Me Know", releaseDate: "2014-09-29", album: "Skool Luv Affair", priority: 1},
            {title : "Rain", releaseDate: "2014-09-29", album: "Skool Luv Affair", priority: 5},
            {title : "Interlude: What Are You Doing", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Could You Turn Off Your Phone", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Embarrassed", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "24/7", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Look Here", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Outro: Do You Think It Makes Sense?", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Like", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 5},
            {title : "Spine Breaker", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 4},
            {title : "Jump", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 5},
            {title : "Tomorrow", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Outro: Propose", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Where You From", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Skit: Soulmate", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "Savage Love", releaseDate: "2020-10-02", album: "Map of the Soul: 7", priority: 1},
            {title : "Fly To My Room", releaseDate: "2020-11-20", album: "BE", priority: 1},
            {title : "Dream Glow", releaseDate: "2020-11-20", album: "BE", priority: 1},
            {title : "Run BTS", releaseDate: "2022-06-10", album: "Proof", priority: 5},
            {title : "DNA", releaseDate: "2017-09-18", album: "Love Yourself: Answer", priority: 4},
            {title : "Blanket Kick", releaseDate: "2020-02-21", album: "Map of the Soul: 7", priority: 1},
            {title : "A Brand New Day (feat. Zara Larsson)", releaseDate: "2019-04-12", album: "Map of the Soul: Persona", priority: 1},
            {title : "Bad Decisions(feat. benny blanco, Snoop Dogg", releaseDate: "2022-08-05", album: "BTS, The Best", priority: 1},
            {title : "Waste It On Me (feat. Steve Aoki)", releaseDate: "2018-02-13", album: "Love Yourself: Tear", priority: 3}, 
            {title : "I`m Fine", releaseDate: "2016-11-18", album: "Wings", priority: 1},
            {title : "Heartbeat", releaseDate: "2019-11-18", album: "Wings", priority: 1},
            {title : "Sea", releaseDate: "2019-11-18", album: "Wings", priority: 1},
            {title : "TOO MUCH", releaseDate: "2023-10-20", album: "Wings", priority: 1},
            {title : "Body to Body", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "Hooligan", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "Aliens", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "FYA", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "2.0", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "No.29", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "SWIM", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "Merry Go Round", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "NORMAL", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "Like Animals", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "they don`t know `bout us", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "One More Night", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "Please", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},
            {title : "Into the Sun", releaseDate: "2026-03-20", album: "ARIRANG", priority: 5},

    ]
        
    },
   {
    artist: "Jean Jung Kook(JK)",
    type: "Solo",
    songs :[
        {title : "Euphoria", releaseDate: "2018-04-05", album: "Love Yourself: Answer", Image:'pictures/jk.jpg'},
        {title : "My Time", releaseDate: "2020-02-21", album: "Map of the Soul: 7", Image:'pictures/jk.jpg'},
        {title : "Stay Alive (feat. Suga)", releaseDate: "2022-01-14", album: "BTS, The Best", Image:'pictures/jk.jpg'},
        {title : "Still With You", releaseDate: "2020-06-13", album: "BTS, The Best", Image:'pictures/jk.jpg'},
        {title : "Standing Next To You", releaseDate: "2022-02-11", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Seven (feat. Latto)", releaseDate: "2023-07-14", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "3D (feat. Jack Harlow)", releaseDate: "2023-07-14", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Closer to You", releaseDate: "2023-07-14", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Yes or No", releaseDate: "2023-11-03", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Please Don`t Change(feat. DJ Snake)", releaseDate: "2023-11-03", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Hate", releaseDate: "2023-11-03", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Somebody", releaseDate: "2023-11-03", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Too Sad To Dance", releaseDate: "2023-11-03", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Shot Glass of Tears", releaseDate: "2020-11-03", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "My You", releaseDate: "2022-06-12", album: "Golden", Image:'pictures/jk.jpg'},
        {title : "Left and Right(feat. Charlie Puth) ", releaseDate: "2022-11-24", album: "BTS, The Best", Image:'pictures/jk.jpg'},
        {title : "Dreamers" , releaseDate: "2022-11-20", album: "BTS, The Best", Image:'pictures/jk.jpg'},
        {title : "Never Let Go", releaseDate: "2024-06-07", album: "Never Let Go", Image:'pictures/jk.jpg'},

    ]
   },
   {
    artist: "Min Yoongi (SUGA)(Agust D)",
    type: "Solo",
    songs :[   
        {title : "Agust D", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},
        {title : "Give It To Me", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},
        {title : "Skit: Dream, Reality", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},
        {title : "724148", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},
        {title : "The Last", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},
        {title : "Tony Montana", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},  
        {title : "Interlude: Set Me Free", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Daechwita", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "What Do You Think?", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Strange", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Interlude: Shadow", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Burn It", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Interlude: Set Me Free Pt.2", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Blueberry Eyes (feat. MAX)", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "People", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Snow Flower (feat. MAX)", releaseDate: "20二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十 twenty twenty twenty twenty twenty twenty twenty twenty twenty twenty twentytwentytwentytwentytwentytwentytwentytwentytwentytwentytwentytwentytwenty", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Interlude: My Time Is Now", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Interlude: Dream, Reality", releaseDate: "2016-08-15", album: "Agust D", Image:'pictures/suga.jpg'},
        {title : "That That (feat.Psy)", releaseDate: "2022-06-24", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Haegeum (feat. J-HOPE)", releaseDate: "2022-06-24", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "Stay Alive (feat. Jungkook)", releaseDate: "2022-01-14", album: "BTS, The Best", Image:'pictures/suga.jpg'},
        {title : "Girl Of My Dreams", releaseDate: "2021-12-10", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "eight (feat. IU)", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "SUGA`s Interlude (feat. Halsey)", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "People pt.2 (feat. IU)", releaseDate: "2020-05-22", album: "D-2", Image:'pictures/suga.jpg'},
        {title : "D-day", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},
        {title : "AMYGDALA", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},
        {title : "Huh? (feat. J-HOPE)", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},
        {title : "SDL", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},
        {title : "Polar Night", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},
        {title : "Interlude: Dawn", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},
        {title : "Snooze(feat.Ryung)", releaseDate: "2023-05-15", album: "D-Day", Image:'pictures/suga.jpg'},

    
    ]},
{
   artist: "Kim Namjoon (RM)",
    type: "Solo",
    songs :[
        {title : "Voice", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Awakening", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Do You", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Monster", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Throw Away", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Joke", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "God Rap", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Rush (feat. Krizz Kaliko)", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Life", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Adrift", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "I believe", releaseDate: "2015-09-03", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Tokyo", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Seoul", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Moonchild", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Badbye (feat. eAeon)", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Uhgood (feat. Lil Cherry)", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Everythingoes (feat. NELL)", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Forever Rain", releaseDate: "2018-10-23", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "All Night", releaseDate: "2019-06-29", album: "Mono", Image:'pictures/rm.jpg'},
        {title : "Rap Monster", releaseDate: "2015-05-20", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Bicycle", releaseDate: "2015-05-20", album: "RM", Image:'pictures/rm.jpg'},
        {title : "K`hawah", releaseDate: "2015-05-20", album: "RM", Image:'pictures/rm.jpg'},
        {title : "SEXY NUKIM(feat. Balming Tiger)", releaseDate: "2022-10-28", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Wild Flower (feat. youjeen)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Yun (feat. Erykah Badu)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Still Life (feat. Anderson .Paak)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "All Day(feat. Tablo)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Forg_tful (feat. Kim Sawol)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Closer (feat.Paul Blanco, Mahaila)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Change pt.2", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Lonely (feat. Younha)", releaseDate: "2022-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Hectic (feat. Colde)", releaseDate: "2020-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "No.2(feat. Park Ji Yoon)",releaseDate: "2015-10-28", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Favorite Girl (feat. Warren G)", releaseDate: "2015-10-28", album: "RM", Image:'pictures/rm.jpg'},
        {title : "Smoke Sprite", releaseDate: "2023-03-14", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Don`t ever say love me (feat.Colde)", releaseDate: "2023-03-14", album: "Indigo", Image:'pictures/rm.jpg'},
        {title : "Come back to me", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Right Place, Wrong Person", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Nuts", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "out of love", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Domadachi(feat. Little Simz)", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Groin", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Heaven", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "LOST!", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Around the world in a day(feat. Moses Sumney", releaseDate: "2024-05-10", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Neva Play(feat. Megan Thee Stallion)", releaseDate: "2024-09-06", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'},
        {title : "Stop to Rain (feat. TABLO)", releaseDate: "2024-09-06", album: "Right Place, Wrong Person", Image:'pictures/rm.jpg'}
       

]},

{
    artist: "Kim Seokjin (JIN)",
    type: "Solo",
    songs :[
        {title : "ABYSS", releaseDate: "2020-11-20", album: "BE", Image:'pictures/jin.jpg'},
        {title : "Super Tuna", releaseDate: "2021-12-24", album: "BE", Image:'pictures/jin.jpg'},
        {title : "Yours", releaseDate: "2021-11-08", album: "BTS, The Best", Image:'pictures/jin.jpg'},
        {title : "It`s Definitely You (feat. V)", releaseDate: "2016-09-08", album: "Love Yourself: Her", Image:'pictures/jin.jpg'},
        {title : "The Astronaut", releaseDate: "2022-10-28", album: "The Astronaut", Image:'pictures/jin.jpg'},
        {title : "I`ll Be There", releaseDate: "2024-10-25", album: "Happy", Image:'pictures/jin.jpg'   },
        {title : "Running Wild", releaseDate: "2024-11-15", album: "Happy", Image:'pictures/jin.jpg'},
        {title : "Another Love", releaseDate: "2024-11-15", album: "Happy", Image:'pictures/jin.jpg'},
        {title : "Falling", releaseDate: "2024-11-15", album: "Happy", Image:'pictures/jin.jpg'},
        {title : "Heart on the Window(feat. WENDY)", releaseDate: "2024-11-15", album: "Happy", Image:'pictures/jin.jpg'},
        {title : "I will come to you", releaseDate: "2024-11-15", album: "Happy", Image:'pictures/jin.jpg'},
        {title : "Rope it" , releaseDate: "2024-11-15", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "School of Tears(feat. SUGA, RM)", releaseDate: "2024-11-15", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Adult Child(feat. SUGA,RM)", releaseDate: "2024-11-15", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Tonight", releaseDate: "2019-06-15", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "You`re My", releaseDate: "2019-06-15", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Epiphany", releaseDate: "2018-09-18", album: "Love Yourself: Answer", Image:'pictures/jin.jpg'},
        {title : "Close To You", releaseDate: "2018-09-18", album: "Love Yourself: Answer", Image:'pictures/jin.jpg'},
        {title : "Echo", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Don`t Say You Love Me", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Loser(feat. YENA)", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Nothing Without Your Love", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "With the clouds", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "Background", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},
        {title : "To Me,Today", releaseDate: "2025-05-25", album: "Echo", Image:'pictures/jin.jpg'},

    ]},


    {
    artist: "Jung Hoseok (J-HOPE)",
    type: "Solo",
    songs :[  
        {title : "Hope World", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "P.O.P (Piece of Peace) pt.1", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Daydream", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Base Line", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Hangsang (feat. Supreme Boi)", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Airplane", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Blue Side (Outro)", releaseDate: "2018-03-02", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Chicken Noodle Soup (feat. Becky G)", releaseDate: "2019-09-27", album: "Hope World", Image:'pictures/jhope.jpg'},
        {title : "Arson", releaseDate: "2022-07-15", album: "Jack in the bocks", Image:'pictures/jhope.jpg'},
        {title : "Pandora`s Box", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "Equal Sign", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "Music Box", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "Safety Zone", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "Future", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "STOP", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "What if", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "Intro: Never Mind", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "More", releaseDate: "2022-07-15", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "Huegum (feat. SUGA)", releaseDate: "2022-06-24", album: "D-2", Image:'pictures/jhope.jpg'},
        {title : "Animal", releaseDate: "2012-06-13", album: "2 Cool 4 Skool", Image:'pictures/jhope.jpg'},
        {title : "Rush Hour", releaseDate: "2022-09-20", album: "Jack in the Box", Image:'pictures/jhope.jpg'},
        {title : "on the Street (feat. J. Cole)", releaseDate: "2023-01-27", album: "Hope On The Street", Image:'pictures/jhope.jpg'},
        {title : "I don`t Know(feat. HUH Yunjin)", releaseDate: "2024-03-29", album: "Hope On The Street", Image:'pictures/jhope.jpg'},
        {title : "I wonder...(feat. Jung Kook)", releaseDate: "2024-03-29", album: "Hope On The Street", Image:'pictures/jhope.jpg'},
        {title : "Neuron", releaseDate: "2024-03-29", album: "Hope On The Street", Image:'pictures/jhope.jpg'},
        {title : "LV Bag (feat. Don Toliver,Pharell Williams)", releaseDate: "2025-02-21", album: "LV Bag", Image:'pictures/jhope.jpg'},
        {title : "Sweet Dreams (feat. Miguel)", releaseDate:"2025-03-07", album: "Charm of HOPE", Image:'pictures/jhope.jpg'},
        {title : "MONA LISA", releaseDate :"2025-02-21", album: "Charm of HOPE", Image:'pictures/jhope.jpg'},
        {title : "Killin' It Girl (feat.GloRilla)", releaseDate: "2025-06-13", album: "Charm of HOPE", Image:'pictures/jhope.jpg'},
        {title : "SPAGHETTI (feat.LE SSERAFIM)", releaseDate: "2025-10-24", album: "SPAGHETTI (feat.LE SSERAFIM)", Image:'pictures/jhope.jpg'},

    ]},

    {
    artist: "Park Jimin (JIMIN)",
    type: "Solo",
    songs :[
        {title : "Like Crazy", releaseDate: "2015-09-03", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Cristmas Love", releaseDate: "2015-09-03", album: "JIMIN", Image:'pictures/jimin.jpg'},
        {title : "Filter", releaseDate: "2020-02-21", album: "Map of the Soul: 7", Image:'pictures/jimin.jpg'},
        {title : "Vibe(feat. Taeyang)", releaseDate: "2023-03-24", album: "Golden", Image:'pictures/jimin.jpg'},
        {title : "Set Me Free Pt.2", releaseDate: "2023-03-24", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Face-off", releaseDate: "2023-03-24", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Alone", releaseDate: "2023-03-24", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Interlude: Dive", releaseDate: "2023-03-24", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Letter", releaseDate: "2023-03-24", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Angel pt.2(feat. Kodak Black,JVKE)", releaseDate: "2023-03-24", album: "Face", Image:'pictures/jimin.jpg'},
        {title : "Closer than This", releaseDate: "2023-12-22", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Smeraldo Garden Marching Band(feat.Loco)", releaseDate: "2024-06-28", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Who", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Be Mine", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Slow Dance(feat. Sofia Carson)", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Rebirth", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Interlude: Snowtime", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Tony Montana (feat. SUGA)", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Promise", releaseDate: "2024-07-19", album: "Muse", Image:'pictures/jimin.jpg'},
        {title : "Christmas Love", releaseDate: "2015-09-03", album: "JIMIN", Image:'pictures/jimin.jpg'},

    ]},

    {
    artist: "Kim Taehyung (V)",
    type: "Solo",
    songs :[    
        {title : "Snow Flower", releaseDate: "2020-12-24", album: "D-2", Image:'pictures/v.jpg'},
        {title : "Sad Song", releaseDate: "2022-01-25", album: "BTS, The Best", Image:'pictures/v.jpg'},
        {title : "Its Definitely You (feat. Jin)", releaseDate: "2016-09-08", album: "Love Yourself: Her", Image:'pictures/v.jpg'},
        {title : "Cristmas Tree", releaseDate: "2021-12-24", album: "BTS, The Best", Image:'pictures/v.jpg'},
        {title : "Rainy Days", releaseDate: "2023-09-08", album: "Layover", Image:'pictures/v.jpg'},
        {title : "Love Me Again", releaseDate: "2023-09-08", album: "Layover", Image:'pictures/v.jpg'},
        {title : "Blue", releaseDate: "2023-09-08", album: "Layover", Image:'pictures/v.jpg'},
        {title : "Slow Dancing", releaseDate: "2023-09-08", album: "Layover", Image:'pictures/v.jpg'},
        {title : "For Us", releaseDate: "2023-09-08", album: "Layover", Image:'pictures/v.jpg'},
        {title : "Wherver U R(feat. UMI)", releaseDate: "2023-12-30", album: "Layover", Image:'pictures/v.jpg'},
        {title : "FRI(END)S", releaseDate: "2024-03-15", album: "Layover", Image:'pictures/v.jpg'},
        {title : "Winter Ahead (feat.PARK HYO SHIN)", releaseDate: "2024-11-24", album: "Winter Ahead", Image:'pictures/v.jpg'},
        {title : "White Christmas (feat.Bing Crosby)", releaseDate:"2024-12-06", album: "White Chritmas", Image:'pictures/v.jpg'}

        

]},

];


function renderCard(song) {
    const card = document.createElement("div");
    card.className = "song-card";

    const badgeClass = song.type === "Group" ? "badge-group" : "badge-solo";

    card.innerHTML = `
    <span class ="badge"${badgeClass}>${song.type}</span>
    <h3>${song.title}</h3>
    <p><strong>Artist:</strong> ${song.artistName}</p>
    <p><strong>Album:</strong> ${song.album}</p>
    <p><strong>Release Date:</strong> ${song.releaseDate}</p>
    `;
    if(typeof display !== 'undefined'){
        display.prepend(card);
    }
}

const btsQueue = new BiPriorityQueue();

document.getElementById('surpriseBtn').onclick = () => {
    const nextSong = radio.next().value;
    renderCard(nextSong);
};



const searchTracksv = (query) => {
    console.log(`%c [Searching...] There is a real search for: ${query}`, 'color: #e67e22');
    const results = [];

    for (const track of musicLibrary) {
        if (
            track.album.toLowerCase().includes(queryLower)  || 
            track.title.toLowerCase().includes(queryLower)  ||
            track.artistName.toLowerCase().includes(queryLower) 
        ) {
            results.push(track);
        }
    }
    return results;
};
           
const memoizedSearch = memoize(searchTracksv, 10);

document.getElementById("searchBtn").onclick = () => {
    const query = document.getElementById("searchInput").value.trim();
    if (!query) return;

    if(typeof display !== 'undefined'){
        display.innerHTML = "";
        const foundTracks = memoizedSearch(query);

        if (foundTracks.length === 0) {
            display.innerHTML = "<p style='color: white;'>No tracks found.</p>";
        } else {
            foundTracks.forEach(track => renderCard(track));
        }
    }
}; 


if (typeof btsData !== 'undefined' && btsData.length >= 2) {
btsQueue.enqueue(btsData[0].songs[0], 5);
btsQueue.enqueue(btsData[0].songs[1], 10);
btsQueue.enqueue(btsData[1].songs[0], 1);
}

console.log("Queue Status");
try {
console.log("Peek Highest:", btsQueue.peek('highest').title); 
console.log("Peek Lowest:", btsQueue.peek('lowest').title);   
console.log("Peek Oldest (FIFO):", btsQueue.peek('oldest').title); 
console.log("Peek Newest (LIFO):", btsQueue.peek('newest').title); 
} catch (error) {
    console.error("Error occurred while peeking into the queue:", error);
}

function handleDequeue(type) {
    const track = btsQueue.dequeue(type);
    
    if (track && typeof display !== 'undefined') {
        display.innerHTML = `<h2 style="color: #9b59b6;">Now Playing from Queue (${type}):</h2>`;
        renderCard(track);

        const statusEl = document.getElementById('queueStatus');
        if (statusEl) {
            statusEl.innerText = `Tracks in queue: ${btsQueue.size}`;
        }
    } else if (!track) {
        alert("Queue is empty! Add some songs first.");
    }
}


const runTask5Demo = async () => {
    console.log ("%c ---Task 5: Async Filter Demo ---", "color: #9b59b6;", "font-weight: bold;");

    try {
        const highPriorityTracks = await filterAsyncPromise(musicLibrary, async (track) => {
            await new Promise(resolve => setTimeout(resolve, 500));
            return track.priority >= 8;
        });
        console.log(" Promise-based Result (Prority >= 8):", highPriorityTracks);
    } catch (err) {
        console.log(err.message);
    }


    filterAsyncCallback(musicLibrary, (track, callback) => {
        setTimeout(() => {
            callback(track.priority >= 8);
        }, 500);
    }, (results) => {
        console.log(" Callback-based Result (Priority >= 8):", results);
    });

    const controller = new AbortController();
    const abortableSearch = filterAsyncPromise(musicLibrary, async (track) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return true;
    }, controller.signal);

    controller.abort();
    abortableSearch.then(error => 
        console.log("Abortable Search Result:", error.message)
    );
};

//runTask5Demo();
const runTask6Demo = async() => {
    console.log("%c ---Task 6: Stream Processing Demo---", "color: #2ecc71;", "font-weight: bold;");

    const musicStream = new LargeMusicStream(musicLibrary,3);
    try {
        let totalProcessed = 0;
        for await (const chunk of musicStream) {
            chunk.forEach(track => {
               console.log(`Processed: ${track.title} by ${track.artistName}`);
               renderCard(track);
            });

            totalProcessed += chunk.length;
            console.log(`%c Progress: ${totalProcessed}/${musicLibrary.length} tracks processed.`, "color: #f1c40f");
        }

        console.log("%c Stream processing complete!", "color: #2ecc71;", "font-weight: bold;");
    } catch (error) {
        console.error("Stream error:", error);
    }
};


if (document.getElementById("runTask6Btn")) {
    document.getElementById("runTask6Btn").onclick = runTask6Demo;
}


const musicPlayer = new EventEmitter();

const runTask7Demo = () => {
    console.log("%c --- Task 7: Reactive Communication Demo --- ", "color: #e67e22; font-weight: bold;");

    const uiUnsubscribe = musicPlayer.on('trackChanged', (track) => {
        console.log(`[UI Interface] 📱 Now displaying info for: ${track.title}`);
    });

    musicPlayer.on('trackChanged', (track) => {
        console.log(`[Analytics] 📊 User started listening to: ${track.title} by ${track.artistName}`);
    });

    const sampleTrack = musicLibrary[0];
    console.log("... Simulating track change ...");
    musicPlayer.emit('trackChanged', sampleTrack);

    console.log("... Unsubscribing UI listener ...");
    uiUnsubscribe();

    console.log("... Simulating next track change ...");
    musicPlayer.emit('trackChanged', musicLibrary[1]); 
};



const runTask8Demo = async () => {
    console.log("%c --- Task 8: Auth Proxy Demo ---", "color: #9b59b6; font-weight: bold;");


    const proxy = new AuthProxy(mockAPIService,{
        token : "v-taehyung-focus-2026",
        type: 'JWT'
    }); 

    try {
        const result =await proxy.request('/api/v1/exclusive-content');
        console.log("%c [App] Server Response:", "color: #27ae60", result);
    } catch (err) {
        console.error("Access denied!");
    }
};



const runTask9Demo = async () => {
    console.log("%c --- Task 9: Logging Decorator Demo --- ", "color: #34495e; font-weight: bold;");
    
    const searchWithLogs = withLogging(function findSongs(query) {
        return musicLibrary.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
    }, { level: 'DEBUG' });

 await searchWithLogs('Into');

    const errorTask = withLogging(async function riskyOperation() {
        throw new Error("Database connection timeout");
    }, { level: 'ERROR' });

    try {
        await errorTask();
    } catch (e) {
    }
};



