function skillsMember() {
    var member = [];
    var skills = [];
    var addMember = function(name) {
        member.push(name);
    };
    var addSkills = function(skill) {
        skills.push(skill);
    };
    var getMember = function() {
        return member;
    };
    var getSkills = function() {
        return skills;
    };
    return {
        addMember: addMember,
        addSkills: addSkills,
        getMember: getMember,
        getSkills: getSkills
    };
}