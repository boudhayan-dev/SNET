
function insertDataIntoTable(){
    var conn = $.db.getConnection();
    $.response.contentType = 'application/json';
    try {
        var content = $.request.body.asString();
        content = JSON.parse(content);

        var ID = content['ID'];
        var MANAGER_ID = content['MANAGER_ID'];
        var NAME = content['NAME'];
        var BIRTHDATE = content['BIRTHDATE'];
        var EMAIL = content['EMAIL'];
        var PHONE = content['PHONE'];
    
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::ADD_SCHOLAR"(?,?,?,?,?,?)');
        pstmt.setString(1, ID);
        pstmt.setString(2, MANAGER_ID);
        pstmt.setString(3, NAME);
        pstmt.setString(4, BIRTHDATE);
        pstmt.setString(5, EMAIL);
        pstmt.setString(6, PHONE);
        
        pstmt.execute();
        conn.commit();
        
        
        
        
        var body = JSON.stringify("Insert successfull");
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




