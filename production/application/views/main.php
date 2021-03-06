<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<!DOCTYPE html>
<HTML lang="en">
    <head>
            <title>The Iguana Games - An Eastern Oklahoma County LAN Party</title>
            <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>/css/homeStyle.css">
            <script src="../js/jquery-3.3.1.min.js"></script>
            <script src="../js/style.js"></script>
    </head>
    <body>
        <div class="section">  
            <video autoplay loop muted id="video" poster="">
                <source src = "../Media/awaken.mp4" type="video/mp4" class="vidtest">
            </video> 
        </div>
        <div class="section_top">
            <img src="../images/iguanalogo.png" class="logo" /><br />
            <h1>The Iguana Games</h1>
            <h2>Eastern Oklahoma County Technology Center</h2>
            <h3>April 13, 2019</h3>
            <div class="scrollText">
                <div id="signUp">SCROLL DOWN TO REGISTER</div>
                <img src="../Media/V-01.png" width="35">
            </div>
        </div>

        <!-- AGENDA SECTION -->
        <div id="agenda">
            <div id="agenda_container">
                <div id="agenda_left">
                    <div id="mission">
                        <strong>Our Mission</strong><br />
                        The Iguana Games exists to help EOC Technology Center students attend educational conferences. Help us, Help Students.
                    </div>
                </div>
                <div id="agenda_right">
                    <div id="agenda_section">
                        <div class="agenda_num">1</div>
                        <h2>FORM A TEAM</h2>
                        <p>During our registration, you may create a team, join a team, or sign up as a free agents. Depending on availability, we will attempt to place free agents on teams.</p>
                    </div>
                    <div id="agenda_section">
                            <div class="agenda_num">2</div>
                            <h2>REGISTER</h2>
                            <p>Prepay to reserve your seat. Optionally, you may prepay for lunch and dinner so you never have to leave campus. You may register below.</p>
                    </div>
                    <div id="agenda_section">
                            <div class="agenda_num">3</div>
                            <h2>ARRIVE AT EOC</h2>
                            <p>Doors open at 10:00am. Come to the registration table. Those who have preregistered should be able to get in quickly and find a seat. First come - First serve.</p>
                    </div>
                    <div id="agenda_section">
                            <div class="agenda_num">4</div>
                            <h2>PARTICIPATE</h2>
                            <p>Tournaments will begin promptly at 11:00am. BYOC activities will happen all day between 11:00 and 7:00pm. Lunch is served between 12:00am and 1:30pm. Dinner will be served between 5:00pm and 6:30pm.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- END OF AGENDA SECTION -->

        <div class="grid">
            <div class="leftColumn">
                <h1 class="register">Register for The Iguana Games</h1>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <div class="mainInputs">
                        <div class="firstContain">
                            <h2>First*</h2>
                            <input class="first topInputs" type="text" placeholder="First Name" value="" required><br>
                        </div>
                        
                        <div class="lastContain">
                            <h2>Last*</h2>
                            <input class="last topInputs" type="text" placeholder="Last Name" value="" required><br>
                        </div>

                        <div class="emailContain">
                            <h2>Email*</h2>
                            <input class="email topInputs" type="email" placeholder="Email Address" required><br>
                        </div>

                        <div class="ignContain">
                            <h2>Screen Name*</h2>
                            <input class="ign topInputs" type="text" placeholder="Screen Name" required><br>
                        </div>
                    </div>
                    <div class="differentFormsButtons">
                        <h2>Game</h2>
                        <select class="game_choice">
                            <option value="">Select your game...</option>
                            <option class="leagueOption" value="league">League of Legends</option>
                            <option class="smashOption" value="smash">Super Smash Brothers Ultimate</option>
                            <option class="byocOption" value="">BYOC Only</option>
                        </select>
                    </div>
                    <div class="leagueForm">
                        <div class="groupChoices">
                            <button class="free" type="button">Free Agent</button>
                            <button class="old" type="button">Already Have A Team</button>
                            <button class="add" type="button">Add New Team</button>
                        </div>
                        <div class="freeHidden">
                                <p>Main Position</p>
                                <div class="mainPos">
                                    <button type="button" value="0" class="topMain">Top</button>
                                    <button type="button" value="0" class="jungleMain">Jungle</button>
                                    <button type="button" value="0" class="midMain">Mid</button>
                                    <button type="button" value="0" class="adcMain">ADC</button>
                                    <button type="button" value="0" class="supportMain">Support</button> 
                                </div>
                                <p>Secondary Position</p>
                                <div class="subPos">
                                    <button type="button" value="0" class="topSub">Top</button>
                                    <button type="button" value="0" class="jungleSub">Jungle</button>
                                    <button type="button" value="0" class="midSub">Mid</button>
                                    <button type="button" value="0" class="adcSub">ADC</button>
                                    <button type="button" value="0" class="supportSub">Support</button> 
                                </div> 
                        </div>
                        <select class="team_choice">
                            <option value="">Select your team...</option>
                            <option value="1">Team 1</option>
                            <option value="2">Team 2</option>
                        </select>
                        <div class="cont_newteam">
                            <h2>Team Name</h2>
                            <input type="text" class="newteam" placeholder="Team Name" />
                        </div>

                    </div>
                    
                    <div class="smashForm">
                        <div class="smashGroupButtons">
                            <button type="button" class="smashFree">Free Agent</button>
                            <button type="button" class="smashOld">Already Have a Team</button>
                            <button type="button" class="smashAdd">Create New Team</button>
                        </div>
                        <select class="smashTeamChoice">
                                <option value="">Select your team...</option>
                                <option value="1">Team 1</option>
                                <option value="2">Team 2</option>
                        </select>
                        <input type="text" placeholder="New Team" class="smashNewTeam">
                    </div>

                    <h2>Lunch</h2>
                    <p class="foodText">If you would prefer not having to leave the venue, please consider prepaying for lunch.</p><br />
                    <em><b>Serving:</b> Chicken Strips, Chips, and a Soda</em>
                    <select class="lunch">
                        <option value="">Would you like to prepay for lunch?</option>
                        <option value="1">Yes [$5.00]</option>
                        <option value="2">No [$0.00]</option>
                    </select>

                    <h2>Dinner</h2>
                    <p class="foodText">If you would prefer not having to leave the venue, please consider prepaying for dinner.</p><br />
                    <em><b>Serving:</b> Roast, Green Beans, Mashed Potatoes, and a Soda</em>
                    <select class="dinner">
                        <option value="">Would you like to prepay for dinner?</option>
                        <option value="1">Yes [$7.00]</option>
                        <option value="2">No [$0.00]</option>
                    </select>
                    
                    <!-- This is the last part of the form; waiver total, pay now, and what cards are accepted -->
                    <h2>Liability Waiver</h2>
                    <p>You must argee to the waiver to participate.</p>
                    <div class="waiver">
                        I, <i class="signing">________________</i>, hereby acknowledge that I desire to participate in The Iguana Games, LAN Party, tournament at Eastern Oklahoma County Technology Center. I also acknowledge that my decision to participate in The Iguana Games event is totally voluntary and is solely for the purpose of my pursuit of recreational activities. I authorize the use of any photos (both digital and print), and videos for The Iguana Games future web / online use to promote further activities. I agree that I am fully aware of the risks and hazards inherent in entering the premises including but not limited to wire hazards, high voltage electrical wiring, narrow aisles, and other hazards and/or in participating in The Iguana Games. If I am using my own equipment, I acknowledge that Eastern Oklahoma County Technology Center nor The Iguana Games event is responsible for any damage to personal property. I hereby irrevocably and forever release, discharge, waive, and hold harmless Eastern Oklahoma County Technology Center from any and all claims, losses (includes property losses, stolen, or damaged), causes of action and liabilities of any kind arising out of or relating in any way to The Iguana Games event. I hereby acknowledge that I will conduct myself in an appropriate manner. I will be participating in an educational institution in which values respect and responsibility. Any inappropriate behavior, including but not limited to foul language, performing harmful acts, obscenity, or any otherwise objectionable conduct towards any person or property. I recognize and understand that hosts (including Travis Tracy) reserves the right to request dismissal from the event without penalty, repayment, or refunding in the event that behavior is deemed inappropriate. I also acknowledge that I am 18 years of age and/or have permission from legal guardians to participate in The Iguana Games. In the event that you are not at least in high school, it is expected that you have a legal guardian. This form is required to be filled out by someone who is of age and responsibility to sign this legal binding document. If you are in high school, it is expected that your legal guardians complete this form on your behalf.
                    </div>
                    <div class="submitAndTotal">
                        <h3 class="total">$15.00</h3>

                        <div class="button15">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                <input class="paypalcode" type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
                                <input type="image" class="submit" src="../Media/REGISTER2.png" 
                                alt="Submit Form">
                                <img class="cardIcons" src="https://www.merchantequip.com/image/?logos=v|m|a|d|p&height=64" alt="Merchant Equipment Store Credit Card Logos">
                        </div>

                        <!-- <div class="button20">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">                                
                        </div>

                        <div class="button22">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
                                
                        </div>

                        <div class="button27">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
                                
                        </div> -->
                        <div class="registerAndIcons">
                        </div>
                    </div>
                </form>
            </div>
            <div class="rightColumn">
                <h1>About</h1>
                    <p class="about">Eastern Oklahoma County Technology Center (EOCTC) continues to serve the communities of Eastern Oklahoma County just as it has for the past 34 years. Serving approximately 600 students a year, EOCTC continues to grow and expand to meet the needs of a growing community and developing business sector. EOCTC continues to embrace new and relevant technologies in order to train students for success in the workplace and increase course offerings to reflect the changing work environment.<br><br>
                    The Iguana Games event was created by students and teachers at EOCTC. As this fundraiser is benefiting the Web/3D design class, here is a brief overview of the program. Students enrolled in the Web design curriculum will have the opportunity to work with many industry leading programs and software such as Photoshop and Visual Studio Code to further their education into web development and design. As well as learning the fundamentals of programming, such as HTML, CSS, JavaScript, and PHP.<br /><br />
                    3D Design students will be given the same opportunity to learn the industry leading software and skills. A few of these being Autodesk Maya, Inventor, AutoCAD, Unity, and Substance Painter. These students will also be provided with the skills to be able to program with languages such as C# and Java.<br /><br />
                    During the course of the year the students in either Web or 3D Design will be given the option to compete for SkillsUSA. The Iguana Games proceeds will go towards helping send web and 3D design students to these contests. SkillsUSA has both a state and national competition. In previous years several students have had the opportunity to make it to Louisville, KY for the National SkillsUSA Conference. In 2018, a high school team from the Web/3D Design class placed 1st place in the nation for Interactive Applications and Game Development and 2nd place for the adult division. We are extremely proud of the accomplishments of our students. Your participation in the event will continue to help students achieve their goals.</p>                    
            </div>
        </div>
        <div class="footer">
            <div>
           &copy; 2019, Eastern Oklahoma County Technology Center
            </div>
        </div>
    </body>
</HTML>