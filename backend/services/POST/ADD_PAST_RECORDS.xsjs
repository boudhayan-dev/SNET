
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        
        var content = $.request.body.asString();
        content = JSON.parse(content);
        
        var START_DATE = content['START_DATE'];
        var END_DATE = content['END_DATE'];
        var SCHOLAR_ID = content['SCHOLAR_ID'];
        var MANAGER_ID = content['MANAGER_ID'];
        var JOBS_ID = content['JOBS_ID'];
       
        
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_PAST_RECORDS"(?,?,?,?,?)');
        pstmt.setString(1, START_DATE);
        pstmt.setString(2, END_DATE);
        pstmt.setString(3, SCHOLAR_ID);
        pstmt.setString(4, MANAGER_ID);
        pstmt.setString(5, JOBS_ID);
        
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




