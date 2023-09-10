
function scroll_distance(scroll_begin, scroll_end) {
    return Math.min(1, ($(this).scrollTop() - scroll_begin) / (scroll_end - scroll_begin));
}
function scroll_weighting(scroll_begin) {
    return ($(this).scrollTop() - scroll_begin)
}

info_dict = {
    "why": ["Why do I want to be part of NCSS?", "NCSS is the perfect opportunity for me to improve, and an important milestone in my technological learning experience. I've had the intention of learning cybersecurity, after being introduced to it by a personal role model, but never the time or resources to do so. As cybersecurity is the stream available in the Sydney campus, I would love to take the opportunity to learn the basics, and continue with cybersecurity well after the program."],
    "music": ["My Time as a Musician", "I was chosen to join the school band in year 4, and played percussion, including drums and glockenspiel. I practised consistently until yr 6, at which point I made the decision to play trumpet. This continued until year 7, at which point I returned to glockenspiel in the intermediate band until lockdown in year 8. After lockdown, I found it difficult to motivate myself to continue and had chosen music as a subject, and needed to make a choice. I decided to learn guitar, and it is a decision I have not regretted since - practising daily and consistently. It paid off, with a large improvement in my music grades and general wellbeing."],
    "ist": ["Software Class", "I chose to study IST at the end of year 8, and it is decision I do not regret. In the first year, due to the nature of the assessment projects, I was unable to achieve particularly high - merely low 90s. However, this year the projects were all relating to programming, and despite it being done mostly in groups, in VB.NET and with a marked portfolio, I was able to achive second place and 98%. Programming is my passion, and I will fight against all odds to prove it. <br><a target='_blank' href='images/achievements/reference.pdf'>Here</a> is the reference provided by my IST teacher. \n Now, in Year 11, I chose Software Design and Development as one of my classes. I've maintained a mark I'm happy with in regards to theory tasks, and also allowed myself to shine where programming logic comes into play, achieving flawless marks for the flowchart and psuedocode of my major project (the project itself is yet to be marked)."],
    "learning": ["My Independent Learning Journey", `DT, and programming in general, has always been a major hobby of mine. A brief, inconcisive list of my experiences include 
    <ul>
    <li>Began programming in 2016</li>
    <li>Created a basic android app in 2019</li>
    <li>Published 3 android games devevloped with Unity in 2020</li>
    <li>Developed and hosted 2 websites with firebase</li>
    <li>Used Linux since 2021</li>
    <li>Learned the basics of the rust programming language</li>
    <li>Experimented with crossplatform applications with GTK, Rust, and Python.</li>
    <li>Co-CEO of <a target='_blank' href='https://classcountdown.com'>Class Countdown</a>, and have been running and hosting the website since 2022</li>
    </ul>Many of these were learning experiences, with placeholder text still in place.`],
    "samples": ["Code Samples", `I've programmed a wide range of applications, games and websites. <ul>
    <li>A fork of a <a target='_blank' href='https://github.com/B34rly/discord-rhythmbox-plugin'>discord rich presence plugin</a> for Rhythmbox, the default music player in the GNOME DE. I added support for album art by accessing the app's API to get the album art for each album, uploading them to discord and storing the reference tags.</li>
    <li><a target='_blank' href='https://github.com/B34rly/gtk-tac-toe/'>A Simple Tic Tac Toe</a> made as an experiment with Rust and GTK.</li>
    <li>An Akinator-style <a href='https://github.com/B34rly/20_questions'>20 questions game</a> created as a class assignment with Python and GTK.</li>
    <li>The <a target='_blank' href='https://ist-b3r1bus-t4l3s.web.app/'>fairy-tale themed website</a> I created as part of IST class.</li>
    <li>The <a target='_blank' href='https://beribus-games.web.app/'>website</a> I created for Beribus Games, the name all games were published under. Still incomplete, with lots of placeholder text.</li>
    <li>The <a target='_blank' href='https://play.google.com/store/search?q=pub:Beribus&c=apps'>3 android games</a> I produced and developed.</li>
    <li>My <a target='_blank' href='https://beribus-games.itch.io/'>itch.io page</a>, with multiple smaller games I created.</li>
    <li>An <a href='https://github.com/B34rly/10ISTAayashAidenYashChatbot/'>chatbot<\a> as the Year 10 IST final project. Slightly carried my group coding wise, they assisted with portfolio and finer details. </li>
    <li>Two small experiments with Rust/Tauri/Svelte done as Year 11 SDD classwork, one based on <a href='https://github.com/B34rly/sdd-arrays'>arrays</a> and the other on <a href='https://github.com/B34rly/sdd-form/'>input forms</a>. </li> 
    </ul>`],
    "reports": ["Previous Reports", "<a href='images/achievements/2021yr9.pdf' target='_blank'>2021 Year 9 Yearly Report</a><br><a href='images/achievements/2022yr10.pdf' target='_blank'>2022 Year 10 Half Yearly Report</a><br><a href='images/achievements/Yr10Yearlyreport.pdf' target='_blank'>2022 Year 10 Yearly Report</a><br><a href='images/achievements/Y11HalfYearlySemester1Report.pdf' target='_blank'>2023 Year 11 Half Yearly Report</a>"],
    "congrats": ["Academic Achievements", `I've achieved consistent high performance in ICAS, in addition to multiple school awards.
    <ul>
    <li><div class="hover_img">
    <a href="images/achievements/icas2017science.jpg" target='_blank'>Distinction in 2017 ICAS Science<span><img src="images/achievements/icas2017science.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/icas2018dt.jpg" target='_blank'>Distinction in 2018 ICAS Digital Technologies<span><img src="images/achievements/icas2018dt.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/icas2018science.jpg" target='_blank'>High Distinction in 2018 ICAS Science<span><img src="images/achievements/icas2018science.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/icas2019dt.jpg" target='_blank'>High Distinction in 2019 ICAS Digital Technologies<span><img src="images/achievements/icas2019dt.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/icas2019science.jpg" target='_blank'>Distinction in 2019 ICAS Science<span><img src="images/achievements/icas2019science.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/house_leader.jpg" target='_blank'>Elected as House Leader for 2022-2023<span><img src="images/achievements/house_leader.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/100_attendance.jpg" target='_blank'>100% Attendance in the 2021 school year<span><img src="images/achievements/100_attendance.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/Yr10AMCdistinction.jpg" target='_blank'>Distinction in the 2022 Australian Maths Competition<span><img src="images/achievements/Yr10AMCdistinction.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/Y10firstinstem.jpg" target='_blank'>First in the Year 10 subject STEM<span><img src="images/achievements/Y10firstinstem.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/DukeofEdbronze2022.jpg" target='_blank'>Completed Duke of Ed Bronze (2022)<span><img src="images/achievements/DukeofEdbronze2022.jpg" alt="image"></span></a>
    </div></li>
    <li><div class="hover_img">
        <a href="images/achievements/ABWparticipation.jpg" target='_blank'>Participation in Australian Business Week (2022)<span><img src="images/achievements/ABWParticipation.jpg" alt="image"></span></a>
    </div></li>
    </ul>
    `],
    "sport": ["Sport", "Sport and physical activity is incredibly important, which has been proven by numerous scientific studies. I have kept it as a fundamental part of my life, having always been excellent at cross-country running, reaching Blacktown Zone for Cross Country in 2019 and 2021. I have been playing tennis every week since 2015, and since the beginning of the year began coaching as a part-time job. This job has improved my soft skills including confidence in speaking, group control and planning. <br> I've kept this up throughout year 11, but also running more often. I ran City2Surf as part of SLR, achieving a 14km time of 1h 13minutes."]
}

var overlay = false
$(document).ready(function () {

    $("#hey").css("opacity", "1");

    $("#bg").css("background-color", "rgb(255,255,255)");
    $("#me").css("opacity", "0");
    $("#goal").css("opacity", "0");
    $("#done").css("opacity", "0");

    $("#info-overlay").click(function (event) {
        console.log(event.target.id)
        if (event.target.id == "info-overlay") {
            button();
        }
    });
});


function button(achivement) {
    console.log("aoeua")
    var info = document.getElementById("info-overlay")
    $("#info-overlay").toggleClass("hidden")

    for (let topic in info_dict) {
        if (topic = achivement) {
            $("#info h1").html(info_dict[topic][0])
            $("#info p").html(info_dict[topic][1])
        }
    }

    /*   if (overlay) {
          $("#info-overlay").toggleClass("hidden")
          //info.classList.add("hidden")
          overlay = false
      } else {
          //$("#info").css("opacity",1)
          //info.classList.remove("hidden")
          $("#info-overlay").toggleClass("hidden")
          overlay = true
      }*/
}

const articles = ["a", "b", "c", "d", "e", "f", "g", "h"]

var scroll_start1 = 0
var scroll_start2 = 500
var scroll_start3 = 750
var scroll_start4 = 1250
var scroll_start5 = 2000
var scroll_start6 = 2500
var scroll_start7 = 2750
var scroll_start8 = 3000
var scroll_start9 = 3640
var scroll_start10 = 4000


$(function () {
    $(window).scroll(function () {
        var scroll_pos = $(this).scrollTop()
        if (scroll_pos < scroll_start2) {
            var mass = 1 + scroll_weighting(0) * 0.005
            $("#hey").css("transform", "scale(" + mass + ")");
            $("#hey").css("opacity", "1");

            $("#bg").css("background-color", "rgb(255,255,255)");
            $("#me").css("opacity", "0");
            $("#goal").css("opacity", "0");
            $("#done").css("opacity", "0");

        } else if (scroll_pos > scroll_start2 && scroll_pos < scroll_start3) {
            var massopacity = scroll_distance(scroll_start2, scroll_start3);
            var massrgb = 255 - massopacity * 255;
            var mass = 1 + scroll_weighting(0) * 0.005

            $("#bg").css(
                "background-color",
                "rgb(" + massrgb + "," + massrgb + "," + massrgb + ")"
            );

            $("#hey").css("opacity", 1 - massopacity);
            $("#hey").css("transform", "scale(" + mass + ")");
        } else if (scroll_pos > scroll_start3 && scroll_pos < scroll_start4) {
            $("#bg").css("background-color", "rgb(0,0,0)");
            $("#hey").css("opacity", 0);

            var mass = (4 ** scroll_distance(scroll_start3, scroll_start5))
            var massopacity = scroll_distance(scroll_start3, (scroll_start3 + scroll_start4) / 2);

            $("#me").css("opacity", massopacity);
            $("#me").css("transform", "scale(" + mass + ")");
        } else if (scroll_pos > scroll_start4 && scroll_pos < scroll_start5) {
            var mass = (4 ** scroll_distance(scroll_start3, scroll_start5))
            var massopacity = 1 - scroll_distance(scroll_start4, (scroll_start4 + scroll_start5) / 2);

            var mass2 = (8 ** (0.2 * scroll_distance((scroll_start4 + scroll_start5) / 2, scroll_start6)))
            var massopacity2 = scroll_distance((scroll_start4 + scroll_start5) / 2, scroll_start5)

            $("#me").css("opacity", massopacity);
            $("#me").css("transform", "scale(" + mass + ")");

            $("#goal").css("opacity", massopacity2);
            $("#goal").css("transform", "scale(" + mass2 + ")");

        } else if (scroll_pos > scroll_start5 && scroll_pos < scroll_start6) {
            $("#me").css("opacity", 0);
            $("#done").css("opacity", 0);

            var mass = (8 ** (0.2 * scroll_distance((scroll_start4 + scroll_start5) / 2, scroll_start6)))
            var massopacity = 1 - scroll_distance(scroll_start5, scroll_start6)

            $("#goal").css("opacity", massopacity);
            $("#goal").css("transform", "scale(" + mass + ")");
        } else if (scroll_pos > scroll_start6 && scroll_pos < scroll_start7) {
            $("#goal").css("opacity", 0);
            $("#bg").css("opacity", 1);
            $("container").css("filter", "blur(30px)")

            var mass = (8 ** (0.1 * scroll_distance(scroll_start6, scroll_start7)))
            var massopacity = scroll_distance(scroll_start6, (scroll_start6 + scroll_start7) / 2)

            $("#done").css("opacity", massopacity);
            $("#done").css("transform", "scale(" + mass + ")");

        } else if (scroll_pos > scroll_start7 && scroll_pos < scroll_start8) {
            var massopacity = 1.5 - scroll_distance(scroll_start7, 8)
            $("#bg").css("opacity", massopacity);
            $("#name-again").css("opacity", 0);

            articles.forEach(element => {
                document.getElementById(element).classList.add("off-center")
            });
            document.body.appendChild(document.body.querySelector("#bg"))
        } else if (scroll_pos > scroll_start8 && scroll_pos < scroll_start9) {
            $("#bg").css("opacity", .5);

            var distance = scroll_start9 - scroll_start8
            console.log(distance / articles.length)
            for (let step = 0; step < articles.length; step++) {
                if (scroll_pos > (scroll_start8 + (distance / articles.length * step))) {
                    document.getElementById(articles[step]).classList.remove("off-center")
                } else {
                    document.getElementById(articles[step]).classList.add("off-center")
                }
            }
        } else if (scroll_pos > scroll_start9 && scroll_pos < scroll_start10) {
            var massopacity = .5 - scroll_distance(scroll_start9, scroll_start10)
            var nameopacity = scroll_distance(scroll_start9, scroll_start10)

            var words = document.body.querySelector("#bg")
            var info = document.body.querySelector("#container")
            if (massopacity < 0.2) {
                document.body.appendChild(info)
            } else {
                document.body.appendChild(words)
            }
            $("#bg").css("opacity", massopacity);
            console.log(massopacity)
            $("#name-again").css("opacity", nameopacity);
            $("#container").css("filter", "blur(" + (30 - 30 * nameopacity) + "px)")
            articles.forEach(element => {
                document.getElementById(element).classList.remove("off-center")
            });
        } else if (scroll_pos >= scroll_start10) {
            $("#bg").css("opacity", 0);
            $("#name-again").css("opacity", 1);
            $("#container").css("filter", "blur(0)")
        }
    });
});
