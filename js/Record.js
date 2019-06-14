const mongoose = require('./db.js');
var Schema = mongoose.Schema;

var eachRecordSchema = new Schema({
        TypeFullName: {type: String},
        ChineseKeyWord: {type: String},
        Code: {type: String},
        CompanyShortCode: {type: String},
        NPPName: {type: String},
        UnitCode: {type: String},
        ExtendField1: {type: String},
        FileClass: {type: String},
        LanguageClass: {type: String},
        ProcSubType: {type: String},
        Name: {type: String},
        EnglishTitle: {type: String},
        SystemCode: {type: String},
        VersionNo: {type: String},
        PseudoSysCode: {type: String},
        FileStatus: {type: String},
        EquipmentCode: {type: String},
        Location: {type: String},
        FromUser: {type: String},
        EquipmentType: {type: String},
        QualitySafeGrade: {type: String},
        SupplierCode: {type: String},
        RiskGrade: {type: String},
        SupplierName: {type: String},
        ProRelevantUnit: {type: String},
        ProviderCode: {type: String},
        DutyUnitName: {type: String},
        SecurityLevel: {type: String},
        VersionDate: {type: String},
        Permit: {type: String},
        SubmitDate: {type: String},
        Permit2: {type: String},
        NextRaiseDate: {type: String},
        Permit3: {type: String},
        DestroyDate: {type: String},
        AboutRegularTest: {type: String},
        RepllaceProcCode: {type: String},
        WitnessPointNum: {type: String},
        ArrayNo: {type: String},
        PlanNetManhour: {type: String},
        IslandCode: {type: String},
        HoldPointNum: {type: String},
        DistributeType: {type: String},
        FileCategory: {type: String},
        WarehouseCode: {type: String},
        PageSize: {type: String},
        BuildingCode: {type: String},
        VersionType: {type: String},
        RoomNo: {type: String},
        Issuer: {type: String},
        UrgentGrade: {type: String},
        Summary: {type: String},
        CreatorName: {type: String},
        ApproverName: {type: String},
        CheckerName: {type: String},
        ApproveDate: {type: String},
        CreateDate: {type: String},
        SubStatus: {type: String},
        RefMsgNo: {type: String},
        ContractorName: {type: String},
        ContractNo: {type: String},
        SealName: {type: String},
        CopyToUnit: {type: String},
        CopyToUser: {type: String},
        MeetingAddress: {type: String},
        Participant: {type: String},
        ConveneUnit: {type: String},
        Convener: {type: String},
        Moderator: {type: String},
        OverdueProcNo: {type: String},
        Memo: {type: String},
        PaperConsigneeName: {type: String},
        PaperConsigneeDate: {type: String},
        ValidDate: {type: String},
        ReceiveDate: {type: String},
        VersionUpReason: {type: String},
        txtversionlistfilestatus1: {type: String},
        txtversionlistversionno1: {type: String},
        txtversionlistcreatorname1: {type: String},
        imgversionlistcreatorid1: {type: String},
        txtversionlistcreatedate1: {type: String},
        txtversionlistcheckername1: {type: String},
        imgversionlistcheckerid1: {type: String},
        txtversionlistcheckdate1: {type: String},
        txtversionlistapprovername1: {type: String},
        imgversionlistapproverid1: {type: String},
        txtversionlistapprovedate1: {type: String},
        txtversionlistfilestatus2: {type: String},
        txtversionlistversionno2: {type: String},
        txtversionlistcreatorname2: {type: String},
        imgversionlistcreatorid2: {type: String},
        txtversionlistcreatedate2: {type: String},
        txtversionlistcheckername2: {type: String},
        imgversionlistcheckerid2: {type: String},
        txtversionlistcheckdate2: {type: String},
        txtversionlistapprovername2: {type: String},
        imgversionlistapproverid2: {type: String},
        txtversionlistapprovedate2: {type: String},
        txtversionlistfilestatus3: {type: String},
        txtversionlistversionno3: {type: String},
        txtversionlistcreatorname3: {type: String},
        imgversionlistcreatorid3: {type: String},
        txtversionlistcreatedate3: {type: String},
        txtversionlistcheckername3: {type: String},
        imgversionlistcheckerid3: {type: String},
        txtversionlistcheckdate3: {type: String},
        txtversionlistapprovername3: {type: String},
        imgversionlistapproverid3: {type: String},
        txtversionlistapprovedate3: {type: String},
        txtversionlistfilestatus4: {type: String},
        txtversionlistversionno4: {type: String},
        txtversionlistcreatorname4: {type: String},
        imgversionlistcreatorid4: {type: String},
        txtversionlistcreatedate4: {type: String},
        txtversionlistcheckername4: {type: String},
        imgversionlistcheckerid4: {type: String},
        txtversionlistcheckdate4: {type: String},
        txtversionlistapprovername4: {type: String},
        imgversionlistapproverid4: {type: String},
        txtversionlistapprovedate4: {type: String},
        txtversionlistfilestatus5: {type: String},
        txtversionlistversionno5: {type: String},
        txtversionlistcreatorname5: {type: String},
        imgversionlistcreatorid5: {type: String},
        txtversionlistcreatedate5: {type: String},
        txtversionlistcheckername5: {type: String},
        imgversionlistcheckerid5: {type: String},
        txtversionlistcheckdate5: {type: String},
        txtversionlistapprovername5: {type: String},
        imgversionlistapproverid5: {type: String},
        txtversionlistapprovedate5: {type: String},
        txtversionlistfilestatus6: {type: String},
        txtversionlistversionno6: {type: String},
        txtversionlistcreatorname6: {type: String},
        imgversionlistcreatorid6: {type: String},
        txtversionlistcreatedate6: {type: String},
        txtversionlistcheckername6: {type: String},
        imgversionlistcheckerid6: {type: String},
        txtversionlistcheckdate6: {type: String},
        txtversionlistapprovername6: {type: String},
        imgversionlistapproverid6: {type: String},
        txtversionlistapprovedate6: {type: String},
        txtversionlistfilestatus7: {type: String},
        txtversionlistversionno7: {type: String},
        txtversionlistcreatorname7: {type: String},
        imgversionlistcreatorid7: {type: String},
        txtversionlistcreatedate7: {type: String},
        txtversionlistcheckername7: {type: String},
        imgversionlistcheckerid7: {type: String},
        txtversionlistcheckdate7: {type: String},
        txtversionlistapprovername7: {type: String},
        imgversionlistapproverid7: {type: String},
        txtversionlistapprovedate7: {type: String},
        procpagesize: {type: String},
        reportpagesize: {type: String},
        procpagenumber: {type: String},
        reportpagenumber: {type: String},
        maintypename: {type: String},
        applystationshorteng: {type: String},
        compcode: {type: String},
        ownername: {type: String},
        ownernameeng: {type: String},
        dirNo: {type: String}
    }
);

module.exports = mongoose.model('YJclassifiction',eachRecordSchema );//其中第一个参数为collection的单数名