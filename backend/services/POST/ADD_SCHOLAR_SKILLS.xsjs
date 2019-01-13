
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        
        var content = $.request.body.asString();
        content = JSON.parse(content);
        
        var LEVEL_OF_EXPERIENCE = content['LEVEL_OF_EXPERIENCE'];
        var SCHOLAR_ID = content['SCHOLAR_ID'];
        var SKILL_ID = content['SKILL_ID'];
        
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_SCHOLAR_SKILLS"(?,?,?)');
        pstmt.setString(1, LEVEL_OF_EXPERIENCE);
        pstmt.setString(2, SCHOLAR_ID);
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




