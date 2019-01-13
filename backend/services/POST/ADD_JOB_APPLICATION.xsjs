
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        
        var content = $.request.body.asString();
        content = JSON.parse(content);
        
        var APPLICATION_DATE = content['APPLICATION_DATE'];
        var SCHOLAR_ID = content['SCHOLAR_ID'];
        var JOBS_ID = content['JOBS_ID'];
        
        
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_JOB_APPLICATION"(?,?,?)');
        pstmt.setString(2, APPLICATION_DATE);
        pstmt.setString(3, SCHOLAR_ID);
        pstmt.setString(4, JOBS_ID);

        
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




