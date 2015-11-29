'use strict';
var toDoListApp = angular.module('myApp.todolist', ['ngRoute', 'OfflinkJs']);
var schemaBuilder = null;

//initDbConnection();
function initDbConnection() {
    var initInjector = angular.injector(["ng"]);
    var flnkDatabaseService = initInjector.get("flnkDatabaseService");
    flnkDatabaseService.init(schemaBuilder).then(function () {
        bootstrapApplication();
    });

}
toDoListApp.controller('ItemCtrl', ['$scope', 'flnkDatabaseService', function ($scope, flnkDatabaseService) {
    $scope.item = {

    };
    var abc;
    var selectParam =[
        'password','user_name','first_name'
    ];
    flnkDatabaseService.read('User',selectParam).then(function (result) {
        $scope.users = result;
        console.log(result);
        $scope.$apply();
    });

    $scope.addItem = function () {
        flnkDatabaseService.insert('Item', $scope.item);
        console.log($scope.item);
    };
}]);

var setSchemaBuilder = function () {
    schemaBuilder = lf.schema.create('todolist', 2);
    schemaBuilder.createTable('User').
        addColumn('id', lf.Type.INTEGER).
        addColumn('user_name', lf.Type.STRING).
        addColumn('password', lf.Type.STRING).
        addColumn('first_name', lf.Type.STRING).
        addPrimaryKey(['id'], true);

    schemaBuilder.createTable('Item').
        addColumn('id', lf.Type.INTEGER).
        addColumn('description', lf.Type.STRING).
        addColumn('deadline', lf.Type.DATE_TIME).
        addColumn('done', lf.Type.BOOLEAN).
        addColumn('assignedTo', lf.Type.INTEGER).
        addPrimaryKey(['id'], true).
        addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC)
        .addForeignKey('assigned_user', {
            local: 'assignedTo',
            ref: 'User.id',
            action: '',
            timing: ''
        });
};
toDoListApp.run(['flnkDatabaseService', function (flnkDatabaseService) {
    setSchemaBuilder();
    flnkDatabaseService.init(schemaBuilder);

    var userArray = [
        {
            'id': 1,
            'user_name': 'arunatebel',
            'password': 'tibz',
            'first_name': 'Aruna'
        },
        {
            'id': 2,
            'user_name': 'chayasan',
            'password': 'chayz',
            'first_name': 'Chaya'
        }

    ];
    var userArray = {
        'id': 2,
        'user_name': 'chayasan',
        'password': 'chayz',
        'first_name': 'Chaya'
    };

    var whereParam={
        'user_name':'chayasan',
        'first_name':'Chaya'
    };
    //flnkDatabaseService.openDb('todolist', 1);
    //console.log(dbCon);

    //flnkDatabaseService.insert('Item', userArray, dbCon);


    flnkDatabaseService.insert('User', userArray, schemaBuilder);

    //var todoDb;
    //var item, user;
    //schemaBuilder.connect().then(function (db) {
    //    todoDb = db;
    //    item = db.getSchema().table('Item');
    //    user = db.getSchema().table('User');
    //    var u1 = user.createRow({
    //        'id': 1,
    //        'user_name': 'arunatebel',
    //        'password': 'tibz',
    //        'first_name': 'Aruna'
    //    });
    //
    //    var u2 = user.createRow({
    //        'id': 2,
    //        'user_name': 'chayasan',
    //        'password': 'chayz',
    //        'first_name': 'Chaya'
    //    });
    //    var t1 = item.createRow({
    //        'id': 1,
    //        'description': 'Kill the dog',
    //        'assignedTo': 1,
    //        'deadline': new Date(),
    //        'done': false
    //    });
    //
    //    var t2 = item.createRow({
    //        'id': 2,
    //        'description': 'Feed the cat',
    //        'assignedTo': 2,
    //        'deadline': new Date(),
    //        'done': true
    //    });
    //
    //    var t3 = item.createRow({
    //        'id': 3,
    //        'description': 'Eat Sandwich',
    //        'assignedTo': 2,
    //        'deadline': new Date(),
    //        'done': false
    //    });
    //
    //    var t4 = item.createRow({
    //        'id': 4,
    //        'description': 'Create Database',
    //        'assignedTo': 1,
    //        'deadline': new Date(),
    //        'done': false
    //    });
    //
    //    db.insertOrReplace().into(user).values([u1, u2]).exec();
    //    return db.insertOrReplace().into(item).values([t1, t2, t3, t4]).exec();
    //}).then(function () {
    //    return todoDb.select().from(item).where(item.done.eq(false)).exec();
    //}).then(function (results) {
    //    results.forEach(function (row) {
    //        console.log(row['assignedTo'], row['description'], 'before', row['deadline']);
    //    });
    //});
}]);
function bootstrapApplication() {
    angular.element(document).ready(function () {
        console.log("Asdasdasd");
        //angular.bootstrap(document, ['myApp.todolist']);
    });
}

