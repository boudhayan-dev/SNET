
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        
        var content = $.request.body.asString();
        content = JSON.parse(content);
        
        var LEVEL_OF_EXPERIENCE = content['LEVEL_OF_EXPERIENCE'];
        var EMPLOYEE_ID = content['EMPLOYEE_ID'];
        var SKILL_ID = content['SKILL_ID'];
        
        
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_EMPLOYEE_SKILLS"(?,?,?)');
        pstmt.setString(1, LEVEL_OF_EXPERIENCE);
        pstmt.setString(2, EMPLOYEE_ID);
        pstmt.setString(3, SKILL_ID);
    
        
        pstmt.execute();
        conn.commit();
        
        
        var body = JSON.stringify('Insert Successful');
        $.response.setBody(body);
        $.response.status = $.net.http.OK;
        
        pstmt.close();
        conn.close();
        
                }
    catch (e) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        $.response.setBody(e.message);
        return;
    }
    
}

insertDataIntoTable();




