
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        var content = $.request.body.asString();
        content = JSON.parse(content);
        
        var ID = content['ID'];
        var MANAGER_ID = content['MANAGER_ID'];
        var START_DATE = content['START_DATE'];
        var END_DATE = content['END_DATE'];
        var DESCRIPTION = content['DESCRIPTION'];
        var VACANCY = content['VACANCY'];
        
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_JOBS"(?,?,?,?,?,?)');
        pstmt.setString(1, ID);
        pstmt.setString(2, MANAGER_ID);
        pstmt.setString(3, START_DATE);
        pstmt.setString(4, END_DATE);
        pstmt.setString(5, DESCRIPTION);
        pstmt.setString(6, VACANCY);
        
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




