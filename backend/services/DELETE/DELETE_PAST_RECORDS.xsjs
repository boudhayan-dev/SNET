
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        var content = $.request.body.asString();
        content = JSON.parse(content);
        

        var SCHOLAR_ID = content['SCHOLAR_ID'];
        var MANAGER_ID = content['MANAGER_ID'];
        var JOBS_ID = content['JOBS_ID'];

        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::DELETE_PAST_RECORDS"(?,?,?)');
        pstmt.setString(1, SCHOLAR_ID);
        pstmt.setString(1, MANAGER_ID);
        pstmt.setString(1, JOBS_ID);

 
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




