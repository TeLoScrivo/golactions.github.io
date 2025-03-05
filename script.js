// [Message Deletion, Mute10m, Mute30m, Mute1h, Warn, Softban/Kick, Ban, XPReset]
Actions = [
    [1,0,0,1,1,0,0,0], //Advertising
    [0,0,0,0,1,0,0,0], //Argumentative Behavior
    [0,0,0,1,1,0,0,0], //Argumentative Behavior after Verbal Warn
    [0,0,0,1,1,0,0,0], //NSFW Speech
    [0,0,0,0,0,0,1,0], //NSFW Speech (If any previous NSFW Speech warns)
    [0,0,0,1,1,0,0,0], //Derogatory Terms
    [0,0,0,0,1,0,0,1], //Spam
    [0,0,0,1,1,0,0,1], //Continuing Spam
    [0,0,0,1,1,0,0,0], //Flooding
    [0,0,0,0,1,0,0,0], //Bodyshaming
    [0,0,0,0,0,0,1,0], //Death Threats
    [0,1,0,0,0,0,0,0], //Begging
    [0,0,1,0,0,0,0,0], //Mini Modding
    [0,0,1,0,0,0,0,0], //Staff Disrespect
    [0,0,0,0,0,1,0,0], //Hacked Account
    [0,0,0,0,0,0,1,0], //Discrimination
    [0,0,0,0,0,0,1,0], //Underage
    [0,0,0,0,0,0,1,0], //Doxxing
    [0,0,0,0,0,0,1,0], //Scamming
    [0,0,0,0,0,0,1,0], //Extreme NSFW
    [0,0,0,0,0,0,1,0] //Bypassing Ban
];
Reasons = ["Advertising",
    "Argumentative Behavior",
    "Argumentative Behavior after Verbal Warn",
    "NSFW Speech",
    "NSFW Speech (If any previous NSFW Speech warns)",
    "Derogatory Terms",
    "Spam",
    "Continuing Spam",
    "Flooding",
    "Bodyshaming",
    "Death Threats",
    "Begging",
    "Mini Modding",
    "Staff Disrespect",
    "Hacked Account",
    "Discrimination",
    "Underage",
    "Doxxing",
    "Scamming",
    "Extreme NSFW",
    "Bypassing Ban",
    ""];

    RulesDetails = ["",
        "No spamming or flooding in the channels, this includes wall texts and spamming messages.",
        "Topics regarding self-harm or suicide aren't allowed, even if said as jokes",
        "Stay PG-13 at all times while on this server, be it in chat or VC. (you can make vague jokes like \"that's what she said\", etc)",
        "No discrimination towards any group of people; this includes race, religion, sexuality, etc. It does not matter if you are part of the group yourself, you will still be punished. This also includes slur usage.",
        "Don't be overly loud, or play music over your microphone in VCs. All rules still apply in VCs.",
        "No sharing of information such as addresses, IDs, phone numbers, etc.",
        "No dangerous or malicious files or links, including phishing, cookie logging, or threats of doxxing or DDoSing, are allowed.",
        "English only while outside of international chats. You can say things such as \"hola,\" \"bonjour,\" etc. Which most people understand.",
        "Use common sense; if you know it's wrong, don’t do it.",
        "Follow Discord ToS and Community Guidelines at all times, including the age requirement for Discord.",
        "Advertising is prohibited, this includes inside of DMs.",
        "Don't mention topics that are controversial"
];


document.addEventListener("DOMContentLoaded", init);

function init() {



    const RuleDB = document.querySelector("#rules");
    const UserTB = document.querySelector('#UserTB');
    const GuidelinesDropBox = document.querySelector('#guideline');
    const ReasonLabel = document.querySelector('#reason');
    const ModAddition = document.querySelector('#ModAddition');
    const ActionLabel = document.querySelector('#action');
    const UserIDLabel = document.querySelector('#userid');

    GuidelinesDropBox.addEventListener('change',Update);
    UserTB.addEventListener('change',Update);
    RuleDB.addEventListener('change',Update);
    ModAddition.addEventListener('change',Update);

    const BanDiv = document.querySelector("#ban");
    const WarnDiv = document.querySelector("#warn");
    const SoftbanDiv = document.querySelector("#softban");
    const MuteDiv = document.querySelector("#mute");
    const ResetDiv = document.querySelector("#reset");

    const warncmd = document.querySelector('#warncmd');
    const bancmd = document.querySelector('#bancmd');
    const mutecmd = document.querySelector('#mutecmd');
    const softbancmd = document.querySelector('#softbancmd');

    const WarnBTN = document.querySelector('#WarnBTN');
    const BanBTN = document.querySelector('#BanBTN');
    const MuteBTN = document.querySelector('#MuteBTN');
    const SoftbanBTN = document.querySelector('#SoftbanBTN');
    const DocBTN = document.querySelector('#DocBTN');

    WarnBTN.addEventListener('click',CopyWarn);
    BanBTN.addEventListener('click',CopyBan);
    MuteBTN.addEventListener('click',CopyMute);
    SoftbanBTN.addEventListener('click',CopySoftban);
    DocBTN.addEventListener('click',CopyDoc);



function CopyDoc()
{
    let documentation = UserIDLabel.innerHTML + "\n" + ReasonLabel.innerHTML + "\n" + ActionLabel.innerHTML + "\n" + "Proof: Attached"
    navigator.clipboard.writeText(documentation);
    alert("Copied the text: \n" + documentation);
}

    function CopyWarn() {

        navigator.clipboard.writeText(warncmd.value);
        alert("Copied the text: \n" + warncmd.value);
        

      }
      function CopyMute() {
        
        navigator.clipboard.writeText(mutecmd.value);
        alert("Copied the text: \n" + mutecmd.value);

      }
      function CopyBan() {
        
        navigator.clipboard.writeText(bancmd.value);
        alert("Copied the text: \n" + bancmd.value);

      }
      function CopySoftban() {
        
        navigator.clipboard.writeText(softbancmd.value);
        alert("Copied the text: \n" + softbancmd.value);

      }


    function Update()
{
    BanDiv.setAttribute("class","hidden");
    WarnDiv.setAttribute("class","hidden");
    SoftbanDiv.setAttribute("class","hidden");
    MuteDiv.setAttribute("class","hidden");

    let BanCommand = "";
    let WarnCommand = "";
    let SoftbanCommand = "";
    let MuteCommand = "";
    let _ModAddition = "";


    
    if (ModAddition.value !== "")
    {
        console.log('ModAddition has value')
        _ModAddition = "\n" +"Moderator Note: " + ModAddition.value;
    }

    UserIDLabel.innerHTML = "UserID: " + UserTB.value 

        if (GuidelinesDropBox.value !== -1) {
            ReasonLabel.innerHTML = "Reason: User has violated Rule " + RuleDB.value +" (" + Reasons[GuidelinesDropBox.value] + ")";
            console.log(GuidelinesDropBox.value)
        }

        let ActionsValue = "";
        if (Actions[GuidelinesDropBox.value][0] === 1) {
            ActionsValue += "Message Deletion + "
        }
        if (Actions[GuidelinesDropBox.value][1] === 1) {
            ActionsValue +="10 minute mute + "
            MuteCommand = "?mute " + UserTB.value + " 10m Refer to the earlier warning for further details."
            MuteDiv.setAttribute("class","shown");
            if (Actions[GuidelinesDropBox.value][4] === 0)
                {
                    MuteCommand = "?mute " + UserTB.value + " 10m Violation of Rule " + RuleDB.value + ": " + RulesDetails[RuleDB.value] + _ModAddition;
                }
        }
        if (Actions[GuidelinesDropBox.value][2] === 1) {
            ActionsValue += "30 minute mute + "
            MuteCommand = "?mute " + UserTB.value + " 30m Refer to the earlier warning for further details."
            MuteDiv.setAttribute("class","shown");
            if (Actions[GuidelinesDropBox.value][4] === 0)
                {
                    MuteCommand = "?mute " + UserTB.value + " 30m Violation of Rule " + RuleDB.value + ": " + RulesDetails[RuleDB.value] + _ModAddition;
                }
        }
        if (Actions[GuidelinesDropBox.value][3] === 1) {
            ActionsValue += "1 hour mute + "
            MuteCommand = "?mute " + UserTB.value + " 1h Refer to the earlier warning for further details."
            MuteDiv.setAttribute("class","shown");
            if (Actions[GuidelinesDropBox.value][4] === 0)
            {
                MuteCommand = "?mute " + UserTB.value + " 1h Violation of Rule " + RuleDB.value + ": " + RulesDetails[RuleDB.value] + _ModAddition;
            }
        }
        if (Actions[GuidelinesDropBox.value][4] === 1) {
            ActionsValue += "Warn + "
            WarnCommand = "?warn " + UserTB.value + " Violation of Rule " + RuleDB.value + ": " + RulesDetails[RuleDB.value] + _ModAddition;
            WarnDiv.setAttribute("class","shown");
        }
        if (Actions[GuidelinesDropBox.value][5] === 1) {
            ActionsValue += "Softban/Kick + "
            
            softbancmdCommand = "?ban " + UserTB.value + " Violation of Rule " + RuleDB.value + ": " + RulesDetails[RuleDB.value] + _ModAddition;
            SoftbanDiv.setAttribute("class","shown");
        }
        if (Actions[GuidelinesDropBox.value][6] === 1) {
            ActionsValue += "Ban + "
            BanCommand = "?ban " + UserTB.value + " Violation of Rule " + RuleDB.value + ": " + RulesDetails[RuleDB.value] + _ModAddition;
            BanDiv.setAttribute("class","shown");
        }
        if (Actions[GuidelinesDropBox.value][7] === 1) {
            ActionsValue += "XP Reset + "
        }

        ActionsValue = ActionsValue.substring(0,ActionsValue.length-3)
        ActionLabel.innerHTML = "Action: " + ActionsValue;

        const AppealNote = "\nIf you believe this warn was wrongfully given, you can appeal this in our [Support Server](https://discord.gg/vKvtVTuypX).";


        WarnCommand += AppealNote;
        BanCommand += AppealNote;
        warncmd.innerHTML = WarnCommand;
        bancmd.innerHTML = BanCommand;
        softbancmd.innerHTML = SoftbanCommand;
        mutecmd.innerHTML = MuteCommand;
        WarnCommand = "";
        MuteCommand = "";
        BanCommand = "";
        SoftbanCommand = "";
/*

*/
    }

}
