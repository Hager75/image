@extends('admin.index')
@section('title','Profile')
@section('section_title','Profile')
@section('content')
<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <!-- left column -->
            <div class="col-md-12 my-3">
                <!-- jquery validation -->
                <div class="card card-primary">
                    @include('admin.error')
                    <div class="card-header">
                        <h3 class="card-title">Edit Profile</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    {{-- 'first_name','last_name','mobile','avatar','national_id','role','email','password', --}}
                    <form method="POST" action="{{route('users.update',$user->id)}}" enctype="multipart/form-data">
                        @csrf
                        @method('put')
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputaddress">_Image</label>
                                <img width='50px' class="profile-user-img img-fluid img-circle" style="float:right;" height='50px' src="/storage/{{$user->avatar}}">
                                <input type="hidden" value="{{$user->avatar}}" name="oldimg">
                                <input type="file" name="profile" class="form-control" id="exampleInputaddress"
                                    placeholder="Upload Image">
                            </div>


                            <div class="row mb-3">
                                <div class="col input-group">
                                    <input type="text" class="form-control" id="first_name" required autofocus
                                        placeholder="First Name" value="{{$user->first_name}}" name="first_name">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col input-group">
                                    <input type="text" class="form-control" id="last_name" value="{{$user->last_name}}"
                                        type="text" required autofocus placeholder="Last Name" name="last_name">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputaddress">Email</label>
                                <input type="text" name="email" value="{{$user->email}}" class="form-control"
                                    id="exampleInputemail" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                Role
                                <select class="custom-select" name="role">
                                    <option value="0" {{ $user->role=='0' ? 'selected' : '' }}> User </option>
                                    <option value="1" {{ $user->role=='1' ? 'selected' : '' }}> Investor </option>
                                    <option value="2" {{ $user->role=='2' ? 'selected' : '' }}> Admin </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputMobile">Mobile</label>
                                <input type="text" name="mobile" value="{{$user->mobile}}" class="form-control"
                                    id="exampleInputMobile" placeholder="Enter Mobile">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputnational">National ID</label>
                                <input type="text" name="national_id" value="{{$user->national_id}}"
                                    class="form-control" id="exampleInputnational" placeholder="Enter National_ID">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputpassword">Password</label>
                                <input type="password" name="password" value="{{$user->password}}" class="form-control"
                                    id="exampleInputpassword" placeholder="Enter password">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputpassword_confirmation">password_confirmation</label>
                                <input type="password" name="password_confirmation" value="{{$user->password}}" class="form-control"
                                    id="exampleInputpassword_confirmation" placeholder="Confirm Password">
                            </div>

                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">update</button>
                        </div>
                </div>
                </form>
            </div>
            <!-- /.card -->
        </div>
        <!--/.col (left) -->
        <!-- right column -->
        <div class="col-md-6">

        </div>
        <!--/.col (right) -->
    </div>
    <!-- /.row -->
    </div><!-- /.container-fluid -->
</section>
<!-- /.content -->


@endsection
