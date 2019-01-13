
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        var content = $.request.body.asString();
        content = JSON.parse(content);
        
        var MID = content['ID'];
        var LOB = content['LOB'];
        var EMAIL = content['EMAIL'];
        var TEAM_NAME = content['TEAM_NAME'];
        var NAME = content['NAME'];
        var PHONE = content['PHONE'];
        
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_MANAGER"(?,?,?,?,?,?)');
        pstmt.setString(1, MID);
        pstmt.setString(2, LOB);
        pstmt.setString(3, EMAIL);
        pstmt.setString(4, TEAM_NAME);
        pstmt.setString(5, NAME);
        pstmt.setString(6, PHONE);
        
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




